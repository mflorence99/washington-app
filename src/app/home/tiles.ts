import { Params } from '../services/params';
import { Tile } from '../state/tiles';

import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-tiles',
  styleUrls: ['./tiles.scss'],
  templateUrl: './tiles.html'
})
export class TilesComponent implements OnDestroy, OnInit {
  #io: IntersectionObserver | null = null;
  #mo: MutationObserver | null = null;

  @Input() tiles: Tile[] = [];

  visibleTiles = new Set();

  constructor(
    private cdf: ChangeDetectorRef,
    private host: ElementRef,
    private params: Params
  ) {}

  #intersectionCallback(intersections: IntersectionObserverEntry[]): void {
    intersections.forEach((intersection) => {
      const src = intersection.target.getAttribute('src');
      if (intersection.isIntersecting) this.visibleTiles.add(src);
      else this.visibleTiles.delete(src);
    });
    this.cdf.markForCheck();
  }

  #mutationCallback(mutations: MutationRecord[]): void {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node: any) => this.#io?.observe(node));
        mutation.removedNodes.forEach((node: any) => this.#io?.unobserve(node));
      }
    });
  }

  ngOnDestroy(): void {
    this.#io?.disconnect();
    this.#mo?.disconnect();
  }

  ngOnInit(): void {
    this.#io = new IntersectionObserver(this.#intersectionCallback.bind(this), {
      root: null,
      rootMargin: `${this.params.home.tiles.intersectionMargin}px`,
      threshold: 0
    });
    this.#mo = new MutationObserver(this.#mutationCallback.bind(this));
    this.#mo.observe(this.host.nativeElement, {
      childList: true
    });
  }
}
