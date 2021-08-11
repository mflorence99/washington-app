import { DestroyService } from '../services/destroy';
import { ModelState } from '../state/model';
import { Params } from '../services/params';
import { Tile } from '../state/tiles';
import { ViewState } from '../state/view';

import { Actions } from '@ngxs/store';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-tiles',
  styleUrls: ['./tiles.scss'],
  templateUrl: './tiles.html'
})
export class TilesComponent implements OnDestroy, OnInit {
  visibleTiles = new Set();

  private io: IntersectionObserver;

  constructor(
    private actions$: Actions,
    private cdf: ChangeDetectorRef,
    private destroy$: DestroyService,
    private host: ElementRef,
    public model: ModelState,
    private params: Params,
    public view: ViewState
  ) {}

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  ngOnInit(): void {
    this.handleActions$();
  }

  tileError(src: string): void {
    console.log(`%cTile ${src} error`, 'color: orchid');
  }

  tileLoaded(src: string): void {
    console.log(`%cTile ${src} loaded`, 'color: seagreen');
  }

  trackByFileName(ix: number, tile: Tile): string {
    return tile.fileName;
  }

  private handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        this.handleModelStabilize(action);
      });
  }

  private handleModelStabilize(action: Object): void {
    if (action['ModelState.stabilize']) {
      setTimeout(() => {
        this.intersectionObserve();
        //   const entries = this.io.takeRecords();
        //   this.intersectionCallback(entries);
      }, 500);
    }
  }

  private intersectionCallback(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      const src = entry.target.getAttribute('src');
      if (entry.isIntersecting) this.visibleTiles.add(src);
      else this.visibleTiles.delete(src);
    });
    this.cdf.markForCheck();
  }

  private intersectionObserve(): void {
    this.io?.disconnect();
    this.io = new IntersectionObserver(this.intersectionCallback.bind(this), {
      root: null,
      rootMargin: `${this.params.home.tiles.intersectionMargin}px`,
      threshold: 0
    });
    this.visibleTiles = new Set();
    const placeholders =
      this.host.nativeElement.querySelectorAll('.placeholder');
    placeholders.forEach((placeholder) => this.io.observe(placeholder));
  }
}
