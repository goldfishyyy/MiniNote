import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
 import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',

})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
