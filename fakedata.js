export default {
  id: 31,
  widget_id: 8398,
  data: {
    data: {
      name: 'Квиз по модульным зданиям',
      id: '31',
      status: '1',
      step1: {
        optional: true,
        company: false,
        img:
          'https://test.neiros.ru/chat_upload/3e57b8fe6b0052757ee42926f7db9807.jpg',
        logo: '',
        title: 'Ответьте на 7 вопрос чтобы получить персональное предложение',
        subtite: 'После прохождения теста - персональный проект',
        button_text: 'Пройти тест',
        name_company: '',
        phone_company: '',
        company_requisites: '',
      },
      step2: [
        {
          variants: [
            {
              id: 1,
              text: 'Общежитие',
              src: '/images/polls-img-2.JPG',
            },
            {
              id: 2,
              text: 'Столовая',
              src: '/images/polls-img-2.JPG',
            },
            {
              id: 3,
              text: 'Столовая',
              src: '/images/polls-img-2.JPG',
            },
            {
              id: 4,
              text: 'Столовая',
              src: '/images/polls-img-2.JPG',
            },
            {
              id: 5,
              text: 'Столовая',
              src: '/images/polls-img-2.JPG',
            },
          ],
          tip_oprosa: 'var-s-kartinami',
          optional: true,
          diapazon_polzunka: true,
          neskolko: true,
          vibor_diapazon_dat: false,
          vibor_vremeni: false,
          neobbyazatelnii_vopros: false,
          question: 'Как планируете использовать модульное здание?',
          massage:
            'Если не знаете или хотите узнать подробнее об условиях - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          id: 246,
        },
        {
          variants: [
            {
              id: 1,
              text: 'Сэндвич панели',
            },
            {
              id: 2,
              text: 'Оцинкованный профлист',
            },
            {
              id: 3,
              text: 'Еще не определился',
            },
          ],
          tip_oprosa: 'var-otvetov',
          optional: true,
          diapazon_polzunka: true,
          neskolko: false,
          vibor_diapazon_dat: false,
          vibor_vremeni: false,
          neobbyazatelnii_vopros: false,
          question: 'Какой вид Контейнера вас заинтересовал?',
          massage:
            'Если не знаете или хотите узнать подробнее о типах блок-контейнеров - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          id: 247,
        },
        {
          variants: [
            {
              id: 1,
              text: '1',
            },
            {
              id: 2,
              text: '2',
            },
            {
              id: 3,
              text: 'Еще не определился',
            },
          ],
          tip_oprosa: 'var-otvetov',
          optional: true,
          diapazon_polzunka: true,
          neskolko: false,
          vibor_diapazon_dat: false,
          vibor_vremeni: false,
          neobbyazatelnii_vopros: false,
          question: 'Сколько этажей планируется в модульном здании?',
          massage:
            'Если не знаете или хотите узнать подробнее о модульных зданиях - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          id: 248,
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
          question: 'Планируемое кол-во человек для размещения',
          massage:
            'Если не знаете или хотите узнать подробнее о модульных зданиях - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          diapazon_dat_ot: '1',
          diapazon_dat_do: '500',
          diapazon_dat_step: '10',
          id: 249,
        },
        {
          variants: [
            {
              id: 1,
              text: 'Мебель',
            },
            {
              id: 2,
              text: 'Оборудование',
            },
            {
              id: 3,
              text: 'Выезд на объект',
            },
            {
              id: 4,
              text: 'Доставка',
            },
            {
              id: 5,
              text: 'Монтаж',
            },
          ],
          tip_oprosa: 'var-otvetov',
          optional: true,
          diapazon_polzunka: true,
          neskolko: true,
          vibor_diapazon_dat: false,
          vibor_vremeni: false,
          neobbyazatelnii_vopros: true,
          question: 'Требуется ли дополнительная комплектация и услуги?',
          massage:
            'Если не знаете или хотите узнать подробнее о возможных комплектациях - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          id: 250,
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
          neobbyazatelnii_vopros: true,
          question: 'У вас есть техническое задание или схема?',
          massage:
            'Если не знаете или хотите узнать подробнее о модульных зданиях - звоните нам: 8 (800) 511-78-77 мы поможем Вам с выбором.',
          id: 251,
        },
      ],
      step3: {
        konsultant: {
          name: 'Максим Вячеславович',
          dolgnost: 'Консультант-менеджер',
          img:
            'https://test.neiros.ru/chat_upload/8faa76fbac901b972cc10aa689ed189f.png',
          is_checked: true,
        },
        motivaciya: {
          'type-skidki': 'Падающая',
          prise1: '5000',
          prise2: '1000',
          is_checked: true,
        },
        bonus: {
          is_checked: true,
          first: {
            type: 'katalog',
            name: 'Проектирование',
            color: '#AFD4FF',
            img: '',
            'color-text': '#fff',
            first: true,
            finish: true,
          },
          finish: {
            active: true,
            type: 'price',
            name: 'Скидка на месяц подписки',
            img: '',
            first: false,
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
        active_massenger: {
          fb: false,
          telegram: false,
          vk: false,
          viber: false,
        },
        title_massenger: '',
        text_button_massenger: '',
        title:
          'Спасибо за ваши ответы! Мы отправим Вам результаты расчета в ближайшее время.',
        text:
          'Получите подарок: при заказе модульного здания от 72 м2 в течение 14 дней - конвектора на всю площадь здания в подарок!',
        text_button: 'Получить расчет стоимости',
        messenge: '',
      },
      step5: {
        color: '#00B9EE',
        color_text: '#fff',
        linck: '.neiros_popup_quiz',
        event: '',
        'text-label': 'Пройти тест',
        active: 'Плавающий ярлык',
        icon: '/global_assets/images/icon_kviz/design/form.svg',
        position: 'down-left',
      },
      step6: {
        on_off: false,
        time: '',
        everyday: false,
        rules: [
          {
            type: 'url_page',
            pravilo: 'like',
            url: 'vologda.smart-module.ru/catalog/modulnye-zdaniya/',
          },
        ],
      },
    },
    name: 'Квиз по модульным зданиям',
  },
  created_at: '2021-04-16 00:00:00',
  updated_at: '2021-04-16 00:00:00',
  name: 'Квиз по модульным зданиям',
  status: 1,
}
