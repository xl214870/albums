import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos;
  albumId;
  albumTitle;
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
  ) { }

  totalLength: any;
  pageSize=12;
  page:number=1;
  spost:any=[];

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.photosService.getPhotos(this.albumId);
    this.photosService.getPhotos(this.albumId).subscribe((result:any[])=>{
      this.spost = result;

      this.totalLength = result.length;
      console.log(this.spost);
    })
    this.albumTitle = this.route.snapshot.queryParamMap.get('album');
    console.log(this.albumTitle);
  }
}
