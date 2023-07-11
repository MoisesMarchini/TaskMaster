import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  currentTabIndex = 0;

  tabsContent = [
    {
      title: 'Bem vindo ao TaskMaster',
      textMuted: 'Seu App de produtividade.',
      textContent: '',
      buttonText: 'Próximo',
    },
    {
      title: 'Defina suas Tarefas',
      textMuted: '',
      textContent: "Clique no botão '+' no canto inferior direito para criar tarefas.",
      buttonText: 'Próximo',
    },
    {
      title: 'Suprindo suas necessidades',
      textMuted: '',
      textContent: 'Você pode mover as tarefas para as suas determinadas mesas.',
      buttonText: 'Começar',
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextTab() {
    const nextTab = (this.currentTabIndex + 1) % this.tabsContent.length;
    if (nextTab === 0) {
      this.router.navigateByUrl('/boards');
      return;
    }

    this.currentTabIndex = nextTab;
  }

}
