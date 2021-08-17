import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  author: any;
  key = environment.api_key;
  selectedContent
  content
  firstContent


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getNews()
  }

  async getNews(){
    await this.apiService.get(`v2/top-headlines?country=us&apiKey=${this.key}`)
    .subscribe(async(res) =>{
      this.content = res.articles;
      this.firstContent = res.articles[0];
      this.selectedContent = this.content.slice(10)
      console.log(this.firstContent)
    })
  }

}
