export default {
  id: 1,
  widget_id: null,
  data: {
    step1: {
      optional: false,
      img:
        'https://test.neiros.ru/chat_upload/f344c30e2d85b63139222aed4ad86a43.png',
      title: 'Заголовок',
      subtite: 'Подзаголовок',
      button_text: 'Кнопка',
    },
    step2: [
      {
        variants: [
          {
            id: 1,
            text: 'Ответ 1',
            src:
              'https://test.neiros.ru/chat_upload/0eaf0c6d5e26b514c2b3b84d515df7fa.png',
          },
          {
            id: 2,
            text: 'Ответ 2',
            src:
              'https://test.neiros.ru/chat_upload/8a94e8f034c88bfe3226be288fc1d118.png',
          },
          {
            id: 3,
            text: 'Ответ 3',
            src: '',
          },
          {
            id: 4,
            text: 'Ответ 4',
            src: '',
          },
          {
            id: 5,
            text: 'Ответ 5',
            src: '',
          },
          {
            id: 6,
            text: 'Ответ 6',
            src: '',
          },
        ],
        tip_oprosa: 'var-s-kartinami',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос с картинками',
        massage: 'Здесь будет вопрос Здесь будет вопрос Здесь будет вопрос',
      },
      {
        variants: [
          {
            id: 1,
            text: 'Вариант 1',
            src:
              'https://test.neiros.ru/chat_upload/d1bf07fb06fa157764eae95bd30d1b38.png',
          },
          {
            id: 2,
            text: 'Вариант 2',
            src:
              'https://test.neiros.ru/chat_upload/d1bf07fb06fa157764eae95bd30d1b38.png',
          },
          {
            id: 3,
            text: 'Еще Вариант',
            src:
              'https://test.neiros.ru/chat_upload/d1bf07fb06fa157764eae95bd30d1b38.png',
          },
          {
            id: 4,
            text: 'И еще',
            src:
              'https://test.neiros.ru/chat_upload/d1bf07fb06fa157764eae95bd30d1b38.png',
          },
        ],
        tip_oprosa: 'var-i-kartinka',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет текст вопроса',
        massage: 'Привет!',
      },
      {
        variants: [
          {
            id: 1,
            text: 'Вариант 1',
            src:
              'https://test.neiros.ru/chat_upload/a9282b6afd417d76170b6bea6c46fbc4.png',
          },
          {
            id: 2,
            text: 'Вариант 2',
            src:
              'https://test.neiros.ru/chat_upload/a9282b6afd417d76170b6bea6c46fbc4.png',
          },
          {
            id: 3,
            text: 'Вариант 3',
            src:
              'https://test.neiros.ru/chat_upload/a9282b6afd417d76170b6bea6c46fbc4.png',
          },
          {
            id: 4,
            text: 'Вариант 4',
            src:
              'https://test.neiros.ru/chat_upload/a9282b6afd417d76170b6bea6c46fbc4.png',
          },
        ],
        tip_oprosa: 'var-i-kartinka',
        optional: true,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос',
        massage: 'Привет!',
      },
      {
        variants: [],
        tip_oprosa: 'pole-dlya-vvoda',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос',
        massage: 'Напиши произвольный ответ',
        primer_otveta: '',
      },
      {
        variants: [
          {
            id: 1,
            text: 'Вариант2',
          },
          {
            id: 2,
            text: 'Вариант 3',
          },
          {
            id: 3,
            text: 'Вариант 4',
          },
        ],
        tip_oprosa: 'vipadayshii-spisok',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос со списком',
        massage: 'Выбери вариант из списка',
        primer_otveta: 'Вариант 1',
      },
      {
        variants: [
          {
            id: 1,
            text: 'Вариант 1',
          },
          {
            id: 2,
            text: 'Вариант 2',
          },
          {
            id: 3,
            text: 'Вариант 3',
          },
          {
            id: 4,
            text: 'Вариант 4',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: true,
        diapazon_polzunka: true,
        neskolko: false,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос',
        massage: 'Здесь будет сообщение от оператора!',
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
        question: 'Здесь будет вопрос с ползунком',
        massage: 'Здесь будет вопрос Здесь будет вопрос Здесь будет вопрос',
        diapazon_dat_ot: '1',
        diapazon_dat_do: '150',
        diapazon_dat_step: '1',
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
        question: 'Здесь будет вопрос с фалом ',
        massage: 'Здесь будет вопрос Здесь будет вопрос',
      },
      {
        variants: [],
        tip_oprosa: 'data',
        optional: true,
        diapazon_polzunka: true,
        neskolko: true,
        vibor_diapazon_dat: true,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: false,
        question: 'Здесь будет вопрос с датой',
        massage: 'Выберите дату',
      },
      {
        variants: [
          {
            id: 1,
            text: 'Вариант 1',
          },
          {
            id: 2,
            text: 'Вариант 2',
          },
          {
            id: 3,
            text: 'Вариант 3',
          },
          {
            id: 4,
            text: 'Вариант 4',
          },
        ],
        tip_oprosa: 'var-otvetov',
        optional: true,
        diapazon_polzunka: false,
        neskolko: true,
        vibor_diapazon_dat: false,
        vibor_vremeni: false,
        neobbyazatelnii_vopros: true,
        question: 'Вопрос 1',
        massage: 'Здесь будет сообщение от оператора.',
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
        question: '',
        massage: '',
      },
    ],
    step3: {
      konsultant: {
        name: 'test',
        dolgnost: 'test',
        is_checked: true,
      },
      motivaciya: {
        'type-skidki': 'Растущая',
        prise1: '1050',
        prise2: '350',
        is_checked: true,
      },
      bonus: {
        is_checked: true,
        first: {
          type: 'katalog',
          name: '',
          color: '#F5CAFF',
          img: '',
          'color-text': '#000',
          first: true,
          finish: true,
        },
        finish: {
          active: true,
          type: 'svoi',
          name: '',
          color: '#FFD87B',
          img:
            'https://test.neiros.ru/chat_upload/1d8d7807d62a8ee3a993103f20669c1f.png',
          'color-text': '#fff',
          first: true,
          finish: true,
        },
      },
    },
    step4: {
      name: {
        active: false,
        value: 'test',
      },
      email: {
        active: false,
        value: 'test@mail.ru',
      },
      phone: {
        active: true,
        value: '12312312313',
      },
      comment: {
        active: false,
        value: 'testtesttesttest',
      },
      send: true,
      title_massenger: 'test',
      text_button_massenger: 'test',
      title: 'test',
      text: 'test',
      text_button: 'test',
      messenge: 'test',
    },
    step5: {
      color: '#276a7c',
      linck: '',
      event: '',
      'text-label': 'Пройти тест',
      active: 'Закрепленный ярлык',
      icon: '/global_assets/images/icon_kviz/design/chat.svg',
      position: 'right-top',
    },
  },
  created_at: '2021-03-31 00:00:00',
  updated_at: '2021-03-31 00:00:00',
}
