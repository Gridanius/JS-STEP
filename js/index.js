"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

let trainersData = [...DATA];
const trainersCardsContainer = document.querySelector('.trainers-cards__container');
const sortingSection = document.querySelector('.sorting');
const filterSection = document.querySelector('.sidebar');

function renderTrainersCards() {
  trainersCardsContainer.innerHTML = '';

  trainersData.forEach((trainer) => {
    // Create a new trainer card
    const trainerCard = document.createElement('li');
    trainerCard.classList.add('trainer');

    // Add the trainer image
    const trainerImg = document.createElement('img');
    trainerImg.src = trainer.photo;
    trainerImg.alt = trainer["last name"];
    trainerImg.classList.add('trainer__img');
    trainerImg.width = 280;
    trainerImg.height = 300;
    trainerCard.append(trainerImg);

    // Add the trainer name
    const trainerName = document.createElement('p');
    trainerName.classList.add('trainer__name');
    trainerName.textContent = `${trainer['first name']} ${trainer['last name']}`;
    trainerCard.append(trainerName);

    // Add the show more button
    const showBtn = document.createElement('button');
    showBtn.type = 'button';
    showBtn.classList.add('trainer__show-more');
    showBtn.textContent = 'ПОКАЗАТИ';

    showBtn.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      const modal = document.createElement('div');
      modal.classList.add('modal');

      const modalBody = document.createElement('div');
      modalBody.classList.add('modal__body');

      modal.append(modalBody);

      const modalImg = document.createElement('img');
      modalImg.src = trainer.photo;
      modalImg.alt = '';
      modalImg.classList.add('modal__img');
      modalImg.width = 280;
      modalImg.height = 360;

      modalBody.append(modalImg);
      
      const modalDescription = document.createElement('div');
      modalDescription.classList.add('modal__description');

      const modalName = document.createElement('p');
      modalName.classList.add('modal__name');
      modalName.textContent = `${trainer["first name"]} ${trainer["last name"]}`;

      modalDescription.append(modalName);

      const modalCategory = document.createElement('p');
      modalCategory.classList.add('modal__point', 'modal__point--category');
      modalCategory.textContent = `Категорія: ${trainer.category}`;

      modalDescription.append(modalCategory);

      const modalExperience = document.createElement('p');
      modalExperience.classList.add('modal__point', 'modal__point--experience');
      modalExperience.textContent = `Досвід: ${trainer.experience}`;

      modalDescription.append(modalExperience);

      const modalSpecialization = document.createElement('p');
      modalSpecialization.classList.add('modal__point', 'modal__point--specialization');
      modalSpecialization.textContent = `Напрям тренера: ${trainer.specialization}`;

      modalDescription.append(modalSpecialization);

      const modalText = document.createElement('p');
      modalText.classList.add('modal__text');
      modalText.textContent = `${trainer.description}`;

      modalDescription.append(modalText);

      modalBody.append(modalDescription);

      const modalBtnClose = document.createElement('button');
      modalBtnClose.classList.add('modal__close');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '30');
      svg.setAttribute('height', '30');
      svg.setAttribute('viewBox', '0 0 72 72');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		svg.appendChild(path);
      modalBtnClose.append(svg);

      modalBody.append(modalBtnClose);

      modalBtnClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'scroll';
      })

      document.body.append(modal);

    });
    trainerCard.append(showBtn);

    // Add the trainer card to the container
    trainersCardsContainer.append(trainerCard);
  });
}
	

sortingSection.removeAttribute('hidden');
filterSection.removeAttribute('hidden');

let originalTrainersDataOrder = [...trainersData]; // store the original order
const sortingButtons = sortingSection.querySelectorAll('button');
sortingButtons[0].classList.add('default-btn');
sortingButtons[1].classList.add('last-name-btn');
sortingButtons[2].classList.add('experience-btn');

sortingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the active class from all buttons
    sortingButtons.forEach((btn) => btn.classList.remove('sorting__btn--active'));
    // Add the active class to the clicked button
    button.classList.add('sorting__btn--active');

    let sortBy;
    if (button.classList.contains('last-name-btn')) {
      sortBy = 'lastName';
    } else if (button.classList.contains('experience-btn')) {
      sortBy = 'experience';
    } else if (button.classList.contains('default-btn')) {
      sortBy = 'default';
    }

    if (sortBy === 'default') {
      trainersData = [...originalTrainersDataOrder]; // reset the data to its original order
    } else {
      // Sort the trainers data
      trainersData.sort((a, b) => {
        if (sortBy === 'lastName') {
          return a['last name'].localeCompare(b['last name']);
        } else if (sortBy === 'experience') {
          return parseInt(b.experience) - parseInt(a.experience);
        }
      });
    }

    // Re-render the trainers cards
    renderTrainersCards();
  });
});




const showBtn = document.querySelector('.filters__submit');

let filteredTrainers = [...DATA];

showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  filterTrainers();
});

function filterTrainers() {
  	// const direction = document.getElementById('gym');
	// const category = document.getElementById('master');

	const directionInput = document.querySelector('input[name="direction"]:checked').value;
	const categoryInput = document.querySelector('input[name="category"]:checked').value;
	const inputsLabels = document.querySelectorAll('label');

	inputsLabels.forEach((label) => {
		label.textContent = label.textContent.toLowerCase();
		console.log(label);
});
	filteredTrainers = DATA.filter((trainer) => {
    if (directionInput === 'all' && categoryInput === 'all') {
      return true;
    } else if (directionInput !== 'all' && categoryInput === 'all') {
		return trainer.specialization === directionInput;
    } else if (directionInput === 'all' && categoryInput !== 'all') {
      return trainer.category === categoryInput;
    } else {
		return trainer.specialization === directionInput || trainer.category === categoryInput;
    }
  });
	console.log(`test`, filteredTrainers);
	console.log(`test1`, directionInput);
	console.log(`test2`, categoryInput);
  renderTrainersCards(); // assuming this function is already defined
}

// Initial render of the trainers cards
renderTrainersCards();
