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
        optional: false,
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
        optional: false,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'qqqq',
        massage: 'qweqweqwe',
      },
      {
        variants: [
          {
            id: 1,
            text: 'wwwwwww1',
            src: '/images/polls-img.JPG',
          },
          {
            id: 2,
            text: 'qweqweqwe2',
            src: '/images/polls-img-2.JPG',
          },
          {
            id: 3,
            text: 'wwwww3',
            src: '/images/polls-img.JPG',
          },
          {
            id: 4,
            text: 'wwwww4',
            src: '/images/polls-img-2.JPG',
          },
        ],
        tip_oprosa: 'var-i-kartinka',
        optional: false,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'qwe',
        massage: 'qweqweqweqwe',
      },
      {
        variants: [],
        tip_oprosa: 'pole-dlya-vvoda',
        optional: false,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'вопрос 5',
        massage: 'вопрос 5 вопрос 5 ',
        primer_otveta: 'пример',
      },
      {
        variants: [
          {
            id: 1,
            text: 'вариант 1',
          },
          {
            id: 2,
            text: 'вариант 2',
          },
          {
            id: 3,
            text: 'вариант 3',
          },
          {
            id: 4,
            text: 'вариант 4',
          },
        ],
        tip_oprosa: 'vipadayshii-spisok',
        optional: true,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'вопрос 6',
        massage: 'вопрос 6 вопрос 6 вопрос 6',
        primer_otveta: 'пример',
      },
      {
        variants: [],
        tip_oprosa: 'data',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: true,
        vibor_vremeni: true,
        neobbyazatelnii_vopros: false,
        question: 'вопрос 7 ',
        massage: 'вопрос 7 вопрос 7  вопрос 7 ',
      },
      {
        variants: [],
        tip_oprosa: 'polzynok',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'вопрос 8',
        massage: 'вопрос 8 вопрос 8 ',
        diapazon_dat_ot: '100',
        diapazon_dat_do: '2000',
        diapazon_dat_step: '50',
      },
      {
        variants: [
          {
            type_files: 'all',
            checked: true,
          },
        ],
        tip_oprosa: 'time-page',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'вопрос 9',
        massage: 'вопрос 9 вопрос 9 вопрос 9 вопрос 9 вопрос 9 ',
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
