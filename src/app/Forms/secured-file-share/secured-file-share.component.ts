import { Component } from '@angular/core';

@Component({
  selector: 'app-secured-file-share',
  templateUrl: './secured-file-share.component.html',
  styleUrls: ['./secured-file-share.component.css']
})
export class SecuredFileShareComponent {
  powerAppsUrl: string = 'https://apps.powerapps.com/play/<cb18bba7-c117-44e7-aae7-f291940c109e>?source=iframe';

  constructor() { }
}
