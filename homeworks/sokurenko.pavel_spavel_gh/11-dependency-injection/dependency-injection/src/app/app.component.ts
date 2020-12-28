import { Component } from '@angular/core';
import { VehicleService } from './services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(private vehicleService: VehicleService) {

  }

  // a = MOCK_VEHICLES;
  manufacturer = 'manufacturer';
  model = 'model';
  fuel = 'fuel';
  atest = 'test';


  test(): void {

    // this.vehicleService.getVehicles().subscribe((str: string) => {
    //   this.atest = str;
    // });
    // console.log(this.a);

    // console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
    // this.manufacturer = faker.fake('{vehicle.manufacturer}');
    // this.model = faker.fake('{vehicle.model}');
    // this.fuel = faker.fake('{vehicle.fuel}');

    // this.atest = faker.fake("{{vehicle.manufacturer}} - {{vehicle.model}} {{vehicle.fuel}}");
  }



}
