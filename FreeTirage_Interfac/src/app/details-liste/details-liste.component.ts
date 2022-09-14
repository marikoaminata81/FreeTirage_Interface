import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { DetailListe } from '../detail-liste';
import { PostulantsService } from '../postulants.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.css']
})
export class DetailsListeComponent implements OnInit {

  id: number = 0;
  constructor(private route:ActivatedRoute,private router: Router,private service: PostulantsService) { }

  // detailListe!: DetailListe;

  detailliste:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    // this.service.getlisteById(this.id).subscribe( data => {
    //   this.detailliste = data;
    // });
    
    this.service.getToutTirage(this.id).subscribe(data=>{
      this.detailliste=data;

    });
    // this.id = this.route.snapshot.params['id']
    // this.service.getlisteById(this.id).subscribe( data => {
    //   this.detaillist = data;
    // });

  }
  
//fonction redirection vers deta
goToDetailTirage(id:number){
  console.log(id);
  return this.router.navigate(['/detailtirage',id])
}

}
