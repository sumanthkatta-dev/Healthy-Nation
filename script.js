// Standardize header icons across pages
(function () {
  const nav = document.querySelector('.right-icons');
  if (!nav) return;
  nav.innerHTML = `
    <a class="icon-link" href="tools.html" aria-label="Tools">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    </a>
    <a class="icon-link" href="shop.html" aria-label="Shop">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    </a>
    <a class="icon-link" href="resources.html" aria-label="Resources">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    </a>
    <a class="icon-link" href="login.html" aria-label="Login">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <span class="login-text">Log In</span>
    </a>
    <a class="icon-link" href="cart.html" aria-label="Cart">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      <span class="cart-badge">0</span>
    </a>
  `;
})();

// Lightweight interactions for the homepage
(function () {
  const chatBtn = document.querySelector('.chat-btn');
  const popover = document.querySelector('.chat-popover');
  const close = document.querySelector('.chat-header .close');

  function toggleChat(open) {
    const isOpen = open ?? popover.hasAttribute('hidden');
    if (isOpen) popover.removeAttribute('hidden');
    else popover.setAttribute('hidden', '');
  }

  chatBtn?.addEventListener('click', () => toggleChat(true));
  close?.addEventListener('click', () => toggleChat(false));
})();

// Gender Selection (Workout page)
(function () {
  const genderCards = document.querySelectorAll('.gender-card');
  
  if (genderCards.length === 0) return; // Only run on workout page

  genderCards.forEach(card => {
    card.addEventListener('click', () => {
      const gender = card.dataset.gender;
      localStorage.setItem('selectedGender', gender);
      window.location.href = 'fitness-level.html?gender=' + gender;
    });
  });
})();

// Fitness Level Selection (Fitness Level page)
(function () {
  const fitnessCards = document.querySelectorAll('.fitness-card');
  
  if (fitnessCards.length === 0) return; // Only run on fitness level page

  fitnessCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.dataset.level;
      localStorage.setItem('selectedFitnessLevel', level);
      window.location.href = 'age-selection.html?level=' + level;
    });
  });
})();

// Age Selection (Age Selection page)
(function () {
  const ageCards = document.querySelectorAll('.age-card');
  
  if (ageCards.length === 0) return; // Only run on age selection page

  ageCards.forEach(card => {
    card.addEventListener('click', () => {
      const age = card.dataset.age;
      localStorage.setItem('selectedAgeGroup', age);
      window.location.href = 'workout-plan.html?age=' + age;
    });
  });
})();

// BMI Calculator functionality
(function () {
  const bmiBtn = document.getElementById('bmi-calc-btn');
  const bmiModal = document.getElementById('bmi-modal');
  const calorieModal = document.getElementById('calorie-modal');
  const modalClose = document.querySelector('.bmi-calculator-modal .bmi-modal-close');
  const unitBtns = document.querySelectorAll('.bmi-calculator-modal .unit-btn');
  const calculateBtn = document.getElementById('calculate-btn');
  const metricInputs = document.getElementById('metric-inputs');
  const imperialInputs = document.getElementById('imperial-inputs');
  const bmiResult = document.getElementById('bmi-result');
  const nextBtn = document.getElementById('next-to-calories-btn');

  let currentUnit = 'metric';

  function openBmiModal() {
    bmiModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeBmiModal() {
    bmiModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    resetCalculator();
  }

  function switchUnit(unit) {
    currentUnit = unit;
    unitBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (unit === 'metric') {
      metricInputs.removeAttribute('hidden');
      imperialInputs.setAttribute('hidden', '');
    } else {
      metricInputs.setAttribute('hidden', '');
      imperialInputs.removeAttribute('hidden', '');
    }
    bmiResult.setAttribute('hidden', '');
  }

  function calculateBMI() {
    let bmi, category, details;

    if (currentUnit === 'metric') {
      const weight = parseFloat(document.getElementById('weight-kg').value);
      const height = parseFloat(document.getElementById('height-cm').value);

      if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values');
        return;
      }

      const heightM = height / 100;
      bmi = weight / (heightM * heightM);
    } else {
      const weight = parseFloat(document.getElementById('weight-lbs').value);
      const feet = parseFloat(document.getElementById('height-ft').value);
      const inches = parseFloat(document.getElementById('height-in').value) || 0;

      if (!weight || !feet || weight <= 0 || feet < 0 || inches < 0) {
        alert('Please enter valid weight and height values');
        return;
      }

      const totalInches = feet * 12 + inches;
      bmi = (weight / (totalInches * totalInches)) * 703;
    }

    bmi = bmi.toFixed(1);

    if (bmi < 18.5) {
      category = 'Underweight';
      details = 'A BMI below 18.5 is considered underweight. It may be beneficial to consult with a healthcare provider.';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      details = 'A BMI between 18.5 and 24.9 is considered a normal, healthy weight.';
    } else if (bmi < 30) {
      category = 'Overweight';
      details = 'A BMI between 25 and 29.9 is considered overweight. Lifestyle changes may help.';
    } else {
      category = 'Obese';
      details = 'A BMI of 30 or above is considered obese. Consult a healthcare provider for personalized advice.';
    }

    displayResult(bmi, category, details);
  }

  function displayResult(bmi, category, details) {
    document.getElementById('result-bmi').textContent = bmi;
    document.getElementById('result-category').textContent = category;
    document.getElementById('result-details').textContent = details;
    bmiResult.removeAttribute('hidden');
  }

  function resetCalculator() {
    document.getElementById('weight-kg').value = '';
    document.getElementById('height-cm').value = '';
    document.getElementById('weight-lbs').value = '';
    document.getElementById('height-ft').value = '';
    document.getElementById('height-in').value = '';
    bmiResult.setAttribute('hidden', '');
  }

  bmiBtn?.addEventListener('click', openBmiModal);
  modalClose?.addEventListener('click', closeBmiModal);

  unitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => switchUnit(e.target.dataset.unit));
  });

  calculateBtn?.addEventListener('click', calculateBMI);
  nextBtn?.addEventListener('click', () => {
    bmiModal.setAttribute('hidden', '');
    calorieModal.removeAttribute('hidden');
  });

  bmiModal?.addEventListener('click', (e) => {
    if (e.target === bmiModal) closeBmiModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!bmiModal.hasAttribute('hidden')) {
        closeBmiModal();
      } else if (!calorieModal.hasAttribute('hidden')) {
        closeCalorieModal();
      }
    }
  });
})();

// Calorie Calculator functionality (Modal version - BMI page)
(function () {
  const calorieModal = document.getElementById('calorie-modal');
  const bmiModal = document.getElementById('bmi-modal');
  const backBtn = document.querySelector('.bmi-back-btn');
  
  if (!calorieModal) return; // Only run on BMI page

  const metricToggle = document.getElementById('metric-toggle');
  const goBtn = document.getElementById('go-btn');
  const calorieResult = document.getElementById('calorie-result');

  const sexSelect = document.getElementById('sex-select');
  const goalSelect = document.getElementById('goal-select');
  const activitySelect = document.getElementById('activity-select');
  const ageInput = document.getElementById('age-input');
  const heightInput = document.getElementById('height-calorie-input');
  const weightInput = document.getElementById('weight-calorie-input');

  let isMetric = true;

  function closeCalorieModal() {
    calorieModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    resetCalorieForm();
  }

  function goBack() {
    calorieModal.setAttribute('hidden', '');
    bmiModal.removeAttribute('hidden');
  }

  metricToggle?.addEventListener('change', () => {
    isMetric = metricToggle.checked;
    const heightLabel = heightInput.previousElementSibling;
    const weightLabel = weightInput.previousElementSibling;
    
    if (isMetric) {
      heightInput.placeholder = 'cm';
      weightInput.placeholder = 'kg';
    } else {
      heightInput.placeholder = 'inches';
      weightInput.placeholder = 'lbs';
    }
  });

  goBtn?.addEventListener('click', calculateCalories);

  function calculateCalories() {
    const sex = sexSelect.value;
    const goal = goalSelect.value;
    const activity = activitySelect.value;
    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!sex || !goal || !activity || !age || !height || !weight) {
      alert('Please fill in all fields');
      return;
    }

    // Convert to metric if needed
    let weightKg = weight;
    let heightCm = height;

    if (!isMetric) {
      weightKg = weight * 0.453592; // lbs to kg
      heightCm = height * 2.54; // inches to cm
    }

    // Mifflin-St Jeor equation
    let bmr;
    if (sex === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryactive: 1.9
    };

    const tdee = bmr * activityMultipliers[activity];

    // Apply goal adjustments
    let adjustedCalories = tdee;
    let goalMessage = '';

    if (goal === 'lose') {
      adjustedCalories = tdee - 500; // 500 calorie deficit for ~0.5kg per week loss
      goalMessage = 'For weight loss, aim for approximately 0.5 kg (1 lb) per week.';
    } else if (goal === 'gain') {
      adjustedCalories = tdee + 500; // 500 calorie surplus for ~0.5kg per week gain
      goalMessage = 'For weight gain, aim for approximately 0.5 kg (1 lb) per week.';
    } else {
      goalMessage = 'This is your daily calorie maintenance level to maintain your current weight.';
    }

    adjustedCalories = Math.round(adjustedCalories);
    displayCalorieResult(adjustedCalories, goalMessage);
  }

  function displayCalorieResult(calories, message) {
    document.getElementById('result-calories').textContent = calories;
    document.getElementById('calorie-details').textContent = message;
    calorieResult.removeAttribute('hidden');
  }

  function resetCalorieForm() {
    sexSelect.value = '';
    goalSelect.value = '';
    activitySelect.value = '';
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    metricToggle.checked = true;
    calorieResult.setAttribute('hidden', '');
  }

  backBtn?.addEventListener('click', goBack);
  document.querySelectorAll('.bmi-calculator-modal .bmi-modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.closest('#calorie-modal')) {
        closeCalorieModal();
      }
    });
  });

  calorieModal?.addEventListener('click', (e) => {
    if (e.target === calorieModal) closeCalorieModal();
  });
})();

// Standalone Calorie Calculator (Calories page)
(function () {
  const goBtn = document.getElementById('go-btn');
  if (!goBtn || document.getElementById('calorie-modal')) return; // Only run on standalone calories page

  const nextBtn = document.getElementById('next-btn');
  const sexSelect = document.getElementById('sex-select');
  const goalSelect = document.getElementById('goal-select');
  const activitySelect = document.getElementById('activity-select');
  const ageInput = document.getElementById('age-input');
  const heightInput = document.getElementById('height-input');
  const weightInput = document.getElementById('weight-input');
  const metricToggle = document.getElementById('metric-toggle');
  const calorieResult = document.getElementById('calorie-result');

  let isMetric = true;

  metricToggle?.addEventListener('change', () => {
    isMetric = metricToggle.checked;
    if (isMetric) {
      heightInput.placeholder = 'cm';
      weightInput.placeholder = 'kg';
    } else {
      heightInput.placeholder = 'inches';
      weightInput.placeholder = 'lbs';
    }
  });

  goBtn?.addEventListener('click', calculateCalories);
  nextBtn?.addEventListener('click', () => {
    window.location.href = 'diet-plan.html';
  });

  function calculateCalories() {
    const sex = sexSelect.value;
    const goal = goalSelect.value;
    const activity = activitySelect.value;
    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!sex || !goal || !activity || !age || !height || !weight) {
      alert('Please fill in all fields');
      return;
    }

    let weightKg = weight;
    let heightCm = height;

    if (!isMetric) {
      weightKg = weight * 0.453592;
      heightCm = height * 2.54;
    }

    let bmr;
    if (sex === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryactive: 1.9
    };

    const tdee = bmr * activityMultipliers[activity];

    let adjustedCalories = tdee;
    let goalMessage = '';

    if (goal === 'lose') {
      adjustedCalories = tdee - 500;
      goalMessage = 'For weight loss, aim for approximately 0.5 kg (1 lb) per week.';
    } else if (goal === 'gain') {
      adjustedCalories = tdee + 500;
      goalMessage = 'For weight gain, aim for approximately 0.5 kg (1 lb) per week.';
    } else {
      goalMessage = 'This is your daily calorie maintenance level to maintain your current weight.';
    }

    adjustedCalories = Math.round(adjustedCalories);
    
    document.getElementById('result-calories').textContent = adjustedCalories;
    document.getElementById('calorie-details').textContent = goalMessage;
    calorieResult.removeAttribute('hidden');
  }
})();
