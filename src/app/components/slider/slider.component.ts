import {Component, Input, ViewEncapsulation} from "@angular/core";
import SwiperCore, {Pagination} from "swiper";
import {MovieModel} from "../../models/movie.model";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    @import '../../../../node_modules/swiper/swiper.min.css';
    @import '../../../../node_modules/swiper/modules/pagination/pagination.min.css';

    .swiper {
      width: 1300px;
      height: 580px;
      image-rendering: optimizeQuality;
    }

    @media screen and (max-width: 1300px) {
      .swiper {
        width: 740px;
        height: 520px;
      }
    }

    @media screen and (max-width: 767px) {
      .swiper {
        max-width: 500px;
        width: 100%;
        height: 700px;
      }
    }

    @media screen and (max-width: 520px) {
      .swiper {
        max-width: 345px;
        width: 100%;
        height: 700px;
      }
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide .backdrop {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: optimizeQuality;
    }

  `]
})
export class SliderComponent {
  @Input() container: MovieModel[] = [];
}
