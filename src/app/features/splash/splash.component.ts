import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppOptions } from 'src/app/core/app-options';
import { LoaderService } from '../../shared/components/loader/loader.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  currentTabIndex = 0;

  tabsContent = [
    {
      artworkUrl: '/assets/artworks/Complete-task.png',
      title: 'Bem vindo ao TaskMaster!',
      textContent: 'Nosso aplicativo foi projetado para ajudar você a organizar suas tarefas de forma eficiente e acompanhar seu progresso.',
      buttonText: 'Próximo',
    },
    // {
    //   artworkUrl: '',
    //   title: 'Defina seus Quadros e Tarefas!',
    //   textContent: "Com TaskMaster, você pode criar quadros Kanban personalizados, adicionar tarefas, atribuir prazos e muito mais.",
    //   buttonText: 'Próximo',
    // },
    {
      artworkUrl: '/assets/artworks/successful-task-completion.png',
      title: 'Adicione tarefas',
      textContent: "Toque no botão '+' para adicionar tarefas.<br> Dê um título à tarefa e pronto, rápido e prático!",
      buttonText: 'Próximo',
    },
    {
      artworkUrl: '/assets/artworks/Organizing-projects.png',
      title: 'Gerencie suas tarefas',
      textContent: "Arraste e solte as tarefas entre as colunas para atualizar o status.<br> Veja suas tarefas ganharem vida!",
      buttonText: 'Começar',
    },
  ]

  constructor(
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    if (AppOptions.tutorial) {
      this.loaderService.showLoader();
      this.router.navigateByUrl('/boards');
    }
  }

  nextTab() {
    const nextTab = (this.currentTabIndex + 1) % this.tabsContent.length;
    if (nextTab === 0) {
      AppOptions.tutorial = true;
      this.router.navigateByUrl('/boards');
      return;
    }

    this.currentTabIndex = nextTab;
  }

}
