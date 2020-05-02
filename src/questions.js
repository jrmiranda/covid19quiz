export default [
  {
    id: 1,
    text: 'Possui doenças cardiovasculares?',
    options: [
      {
        text: 'Sim',
        value: 1
      },
      {
        text: 'Não',
        value: 0
      }
    ]
  },
  {
    id: 2,
    text: 'É gestante?',
    options: [
      {
        text: 'Sim',
        value: 1
      },
      {
        text: 'Não',
        value: 0
      }
    ]
  },
  {
    id: 2,
    text: 'Qual trimestre de gestação?',
    dependsOn: 1,
    dependsOnValue: 1,
    options: [
      {
        text: 'Primeiro',
        value: 0
      },
      {
        text: 'Segundo',
        value: 0
      },
      {
        text: 'Terceiro',
        value: 1
      }
    ]
  },
  {
    id: 3,
    text: 'Possui diabetes?',
    options: [
      {
        text: 'Sim',
        value: 1
      },
      {
        text: 'Não',
        value: 0
      }
    ]
  },
  {
    id: 4,
    text: 'É fumante?',
    last: true,
    options: [
      {
        text: 'Sim',
        value: 1
      },
      {
        text: 'Não',
        value: 0
      }
    ]
  }
]