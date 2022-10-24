import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

export interface PostData {
  id: number;
  title: string;
  image: string;
  publishedAt: string;
}

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {

  ELEMENT_DATA: PostData[] = [
    { id: 1,
      title: 'JavaScript new features',
      image: "assets/pictures/javascript.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 2,
      title: 'Why to use Angular Material',
      image: "assets/pictures/angular.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 3,
      title: 'React is a future',
      image: "assets/pictures/react.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 4,
      title: 'How to find a job as a developer',
      image: "assets/pictures/job.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 5,
      title: 'CSS or SASS?',
      image: "assets/pictures/css.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 6,
      title: 'JavaScript new features',
      image: "assets/pictures/javascript.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 7,
      title: 'Why to use Angular Material',
      image: "assets/pictures/angular.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 8,
      title: 'React is a future',
      image: "assets/pictures/react.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 9,
      title: 'How to find a job as a developer',
      image: "assets/pictures/job.jpg",
      publishedAt: new Date().toLocaleString(),
    },
    { id: 10,
      title: 'CSS or SASS?',
      image: "assets/pictures/css.jpg",
      publishedAt: new Date().toLocaleString(),
    },

  ];

  displayedColumns: string[] = ['id', 'title', 'image', 'publishedAt', 'actions'];

  dataSource = this.ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(id:number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) =>{
      if(result === 'true') {
        this.dataSource = this.dataSource.filter(data => data.id !== id);
      }
    })
  }

}
