// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      activeText: "",
      lastElement: false,
      turn: false,
      steps: [
        {
          isDone: false,
          isActive: true,
          title: "Основы",
          text:
            "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          isDone: false,
          isActive: false,
          title: "Компоненты",
          text:
            "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
        },
        {
          isDone: false,
          isActive: false,
          title: "Роутер",
          text:
            "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
        },
        {
          isDone: false,
          isActive: false,
          title: "Vuex",
          text:
            "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
        },
        {
          isDone: false,
          isActive: false,
          title: "Composition",
          text:
            "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
        },
      ],
    };
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex) this.activeIndex--;
    },
    reset() {
      // начать заново
      this.lastElement = false;
      this.activeIndex = 0;
    },
    nextOfFinish(e) {
      // кнопка вперед или закончить
      if (this.activeIndex < this.steps.length - 1) this.activeIndex++;
    },
    setActive(i) {
      // когда нажимаем на определенный шаг
      this.activeIndex = i;
    },
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    activeStep() {
      return this.steps.map((step, i) => {
        if (i === this.activeIndex) {
          this.activeText = step.text;
          step.isActive = true;
        } else {
          step.isActive = false;
        }

        if (this.activeIndex !== 0) {
          this.turn = true;
        } else {
          this.turn = false;
        }

        if (this.activeIndex === this.steps.length - 1) this.lastElement = true;
        return step;
      });
    },

    chackPosition(i) {
      return this.steps.map((step, i) => {
        if (i < this.activeIndex) {
          step.isDone = true;
        } else {
          step.isDone = false;
        }
      });
    },
    // activeClass() {
    //   return this.steps.map((step, i) => {});
    // },
    // 2. выключена ли кнопка назад

    // 3. находимся ли мы на последнем шаге
  },
};

Vue.createApp(App).mount("#app");
