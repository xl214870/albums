import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    albums;
    constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
  ) { }

  totalLength:any;
  pageSize=15;
  page:number = 1;
  showpost:any = [];

  ngOnInit(){
    this.albums = this.photosService.getAlbums();
    this.photosService.getAlbums().subscribe((result:any[])=>{
      this.showpost = result;

      this.totalLength = result.length;
      console.log(this.showpost);
    })
  }

}
