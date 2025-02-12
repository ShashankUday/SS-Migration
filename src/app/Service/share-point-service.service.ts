import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharePointServiceService {
  private siteUrl = 'https://conseroglobal.sharepoint.com/sites/SecuredFileShare';
  private listName = 'YourListName';

  constructor(private http: HttpClient) {}

  getListItems(): Observable<any> {
    const url = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;
    const headers = new HttpHeaders({
      'Accept': 'application/json;odata=verbose',
      'Authorization': `Bearer YOUR_ACCESS_TOKEN`
    });

    return this.http.get<any>(url, { headers });
  }

  createListItem(data: any): Observable<any> {
    const url = `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;
    const headers = new HttpHeaders({
      'Accept': 'application/json;odata=verbose',
      'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
      'Content-Type': 'application/json'
    });

    const body = {
      '__metadata': { 'type': 'SP.Data.YourListNameListItem' },
      'Title': data.title,
      'FieldName': data.fieldValue,
    };

    return this.http.post<any>(url, body, { headers });
  }
}
