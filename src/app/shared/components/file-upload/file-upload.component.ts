import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ui-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
   
    @Input() multiple:boolean;

	@Input() maxFileSize:number;

	errorMessage:string;

	files:File[];

	inputFile:File;

	imageSrc:string;

	fileName:string;

	fileSize:string;

	fileType:string;

	fileIcon:string;

	ngOnInit(){
		this.files = [];
		this.maxFileSize = 1048576	//2MB
	}

	onButtonClick(event,fileInput){
		fileInput.value = null;
		fileInput.click();
	}

	onFileChange(event){
		if(!this.multiple)
			this.files = [];
			
			this.errorMessage = '';
			this.imageSrc = null;
		let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
			for(let i= 0; i < files.length ; i++){
				let file = files[i];
				var self  = this;
				var reader  = new FileReader();
				if(this.checkFileSize(file.size)){
					if(!this.isImage(file)){
						this.setFileIcon(file);					
					}else{
						reader.onload = function(e){
					    	self.imageSrc = reader.result;
						}
					}
					this.fileName = this.formatName(file.name);
					this.fileSize  = this.showFileSize(file.size);
					reader.readAsDataURL(file);
			 		this.files.push(files[i]);	
			 	}else{
			 		console.log(this.errorMessage)
			 	}		
			}	
	}

	isImage(file:File):boolean{
		if(file.type.match('image/*'))
			return true;
		else
			return false;
	}

	setFileIcon(file:File){
		switch (file.type) {
			case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": this.fileIcon = 'fa-file-excel-o'
				break;
			case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": this.fileIcon = 'fa-file-word-o'
				break;
			case "application/pdf": this.fileIcon = 'fa-file-pdf-o'
				break;	
			default: this.fileIcon ='fa-file-o'
				break;
		}
	}

	fileList():boolean{
		return this.files && this.files.length > 0;
	}

	onRemove(index:number){
		return this.files.splice(index);
	}

	formatName(name:string):string{
		var fileName = name;
		if(fileName.length > 23){
			var lastString =fileName.substr(-5);
			var firsSubString =fileName.substr(0,12);
			var fileName =firsSubString + "....." +lastString;
			return fileName
		} else
			return fileName;
	}

	showFileSize(size:number){
		var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    	var fSize = size; 
    		let i=0;
    		while(fSize>900)
    		{
    			fSize=fSize/1024;i++;
    		}
   		return ((Math.round(fSize*100)/100)+' '+fSExt[i]);
	}

	checkFileSize(size:number):boolean{
		if(size > this.maxFileSize){
			this.errorMessage = "File can't be greater than 2MB."
			return false;
		}	
		else
			return true;	
	}

}
