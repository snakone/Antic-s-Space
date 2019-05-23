import { Component, OnInit } from '@angular/core';
import { CrafterService } from '../../crafter/crafter.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})

export class HelpComponent implements OnInit {

  constructor(private crafter: CrafterService) { }

  ngOnInit() {}

  close(): void {
    this.crafter.close();
  }

}
