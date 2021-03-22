export default {
  id: 1,
  widget_id: null,
  data: {
    step1: {
      title: '',
      subtite: '',
      button_text: '',
    },
    step2: [
      {
        variants: [
          {
            id: 1,
            text: 'v1',
            src: '',
          },
          {
            id: 2,
            text: 'v2',
            src: '',
          },
        ],
        tip_oprosa: 'var-s-kartinami',
        optional: true,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'v',
        massage: 'vvvvv',
      },
      {
        variants: [
          {
            id: 1,
            text: 'v1',
          },
          {
            id: 2,
            text: 'v2',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: true,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'q1',
        massage: 'qqqqqq',
      },
      {
        variants: [
          {
            id: 1,
            text: 'qwe1',
          },
          {
            id: 2,
            text: 'qwe2',
          },
          {
            id: 3,
            text: 'qwe3',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'qqqq',
        massage: 'qweqweqwe',
      },
    ],
    step3: {
      konsultant: {
        name: '',
        dolgnost: '',
        is_checked: true,
      },
      motivaciya: {
        'type-skidki': 'Растущая',
        prise1: '1000',
        prise2: '500',
        is_checked: true,
      },
      bonus: {
        first: {
          name: '',
          color: '#D5D3FA',
          first: true,
          finish: false,
        },
        finish: {
          active: false,
          name: '',
          color: '#D5D3FA',
          first: true,
          finish: false,
        },
      },
    },
    step4: {
      name: {
        active: true,
        value: '',
      },
      email: {
        active: false,
        value: '',
      },
      phone: {
        active: true,
        value: '',
      },
      comment: {
        active: false,
        value: '',
      },
      send: false,
      title_massenger: '',
      text_button_massenger: '',
      title: '',
      text: '',
      text_button: '',
      messenge: '',
    },
    step5: {
      color: '#d5d3fa',
      linck: '',
      event: '',
      'text-label': '',
      icon: '/global_assets/images/icon_kviz/design/form.svg',
      position: 'down-right',
    },
  },
  created_at: '2021-03-22 00:00:00',
  updated_at: '2021-03-22 00:00:00',
}
