import { Injectable } from '@angular/core';
import { Product } from '../Entity/product.model'; 
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const Baseurl="http://localhost:5263/api/Product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private loggedInStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private Http:HttpClient)
  { 
    
  }

  AddProduct(product:any):Observable<any>{
    return this.Http.post(Baseurl+"/Create",product)
  }

  UpdateProduct(product:any,id:any):Observable<any>{
    return this.Http.put(Baseurl+"/Update?id"+id,product)
  }


  GetAll():Observable<Product[]>
  {
    return this.Http.get<Product[]>(Baseurl+"/GetAll")
  }
  getByID(id:any):Observable<Product>{
    return this.Http.get<Product>(Baseurl+"/GetProductById?id=" +id)
  }
  deleteProduct(id:number):Observable<any>{
    return this.Http.delete(Baseurl+"/Delete?id="+id)
       }


       Login(email:any,password:any,Details:any):Observable<any>{
        return this.Http.post(Baseurl+"/Login?email="+email+"&password="+password,Details)
     }
     SetLoggedIn(status: boolean,response:any) {
      if (status) {
        localStorage.setItem('token', response.result);
        localStorage.setItem('LoginID',response.obj); 
        
        // Store a dummy token (replace this with actual logic)
      } else {
        localStorage.removeItem('token'); // Remove token on logout
      }
      this.loggedInStatus.next(status); // Update the loggedInStatus observable
    }
    private isLoggedIn(): boolean {
      return !!localStorage.getItem('token'); // Returns true if token is found
    }
    
}
