export default {
  id: 1,
  widget_id: null,
  data: {
    step1: {
      title: null,
      subtite: null,
      button_text: null,
    },
    step2: [
      {
        variants: [
          {
            id: '1',
            text: 'в1',
          },
          {
            id: '2',
            text: 'в2',
          },
          {
            id: '3',
            text: 'в3в',
          },
          {
            id: '4',
            text: 'в4',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: 'true',
        diapazon_polzunka: 'true',
        neskolko: 'false',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'false',
        question: 'вопрос1',
        massage: 'вопрос1 вопрос1 вопрос1',
      },
      {
        variants: [
          {
            id: '1',
            text: 'ццц1',
          },
          {
            id: '2',
            text: 'цц2',
          },
          {
            id: '3',
            text: '33',
          },
          {
            id: '4',
            text: '4',
          },
          {
            id: '5',
            text: null,
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: 'true',
        diapazon_polzunka: 'true',
        neskolko: 'true',
        vibor_diapazon_dat: 'false',
        vibor_vremeni: 'false',
        neobbyazatelnii_vopros: 'false',
        question: 'Вопрос 2',
        massage: 'Вопрос 2 Вопрос 2 Вопрос 2',
      },
    ],
    step3: {
      konsultant: {
        name: null,
        dolgnost: null,
        is_checked: 'true',
      },
      motivaciya: {
        'type-skidki': 'Растущая',
        prise1: '1000',
        prise2: '500',
        is_checked: 'true',
      },
      bonus: {
        first: {
          name: null,
          color: '#D5D3FA',
          first: 'true',
          finish: 'false',
        },
        finish: {
          active: 'false',
          name: null,
          color: '#D5D3FA',
          first: 'true',
          finish: 'false',
        },
      },
    },
    step4: {
      name: {
        active: 'true',
        value: null,
      },
      email: {
        active: 'false',
        value: null,
      },
      phone: {
        active: 'true',
        value: null,
      },
      comment: {
        active: 'false',
        value: null,
      },
      send: 'false',
      title_massenger: null,
      text_button_massenger: null,
      title: null,
      text: null,
      text_button: null,
      messenge: null,
    },
    step5: {
      color: '#d5d3fa',
      linck: null,
      event: null,
      'text-label': null,
      icon: '/global_assets/images/icon_kviz/design/form.svg',
      position: 'down-right',
    },
  },
  created_at: '2021-03-20 00:00:00',
  updated_at: '2021-03-20 00:00:00',
}
