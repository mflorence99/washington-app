import { Params } from '../services/params';

import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';

// 👀 https://stackoverflow.com/questions/54311176/angular-6-catch-missing-image-source-then-try-to-reset-the-same-source

@Directive({
  selector: 'img[appRetrySrc]'
})
export class RetrySrcDirective implements OnDestroy {
  #src: string;
  #timer;

  constructor(
    private host: ElementRef<HTMLImageElement>,
    private params: Params
  ) {}

  #clearTimer(): void {
    if (this.#timer) {
      clearTimeout(this.#timer);
      this.#timer = null;
    }
  }

  @Input()
  set appRetrySrc(value: string) {
    this.#clearTimer();
    this.#src = value;
    this.host.nativeElement.src = value;
  }

  @HostListener('error') imgError(): void {
    console.log(`%c${this.#src} error`, 'color: orchid');
    this.#clearTimer();
    this.#timer = setTimeout(
      () => (this.host.nativeElement.src = this.#src),
      this.params.home.retrySrc.interval
    );
  }

  @HostListener('load') imgLoaded(): void {
    this.#clearTimer();
  }

  ngOnDestroy(): void {
    this.#clearTimer();
  }
}
