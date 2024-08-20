import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {
  constructor() { }

  saveFormData(formKey: string, data: any): void {
    try {
      localStorage.setItem(formKey, JSON.stringify(data));
      console.log(`Data saved under key ${formKey}`);
    } catch (error) {
      console.error('Error saving data', error);
    }
  }
  
  getFormData(formKey: string): any {
    try {
      const data = localStorage.getItem(formKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving data', error);
      return null;
    }
  }

  clearFormData(formKey: string): void {
    localStorage.removeItem(formKey);
  }

  updateFormData(formKey: string, newData: any): void {
    this.saveFormData(formKey, newData);
  }

  deleteFormData(formKey: string): void {
    localStorage.removeItem(formKey);
  }
}
