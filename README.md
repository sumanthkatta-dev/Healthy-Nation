# HEALTHY NATION 🏥

![Status](https://img.shields.io/badge/Status-MVP_Prototype-orange?style=for-the-badge)
![Workflow](https://img.shields.io/badge/Workflow-Wix_to_Code-purple?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Static_Multi--Page-blue?style=for-the-badge)

> **2nd Year Lab Project (2024)**
> A static multi-page health platform MVP. Prototyped in Wix Studio, implemented in pure code.

## 🖼️ Project Preview
![Project Preview](./preview.jpg)
*(Snapshot of the final MVP interface)*

## 🚀 Live Demo
[**🔗 Click Here to View Live Website**](https://sumanthkatta-dev.github.io/Healthy-Nation/)

> **⚠️ Seeing a Red "Dangerous Site" Warning?**
> Google's automated security bots may flag this new domain as a false positive.
> **To bypass it:** Click **"Details"** -> **"Visit this unsafe site"** (underlined text).
> *This is a 100% static student project.*

---

## 📘 Case Study: From Prototype to Code
This project was executed as a technical case study in **rapid prototyping and implementation**:

### Phase 1: Visual Prototyping (Wix Studio)
Before writing code, I utilized **Wix Studio** to design the high-fidelity UI. This allowed me to:
* Experiment with color theory and layout without code overhead.
* Establish the user journey and experience (UX) flow.

### Phase 2: Technical Implementation (The Code)
I **reverse-engineered** the verified prototype into a lightweight, static site without dependencies:
* **Frontend:** Semantic HTML5, CSS3, and Vanilla JavaScript.
* **Backend Concepts:** Integrated Python/Java logic for data processing (during lab evaluation).
* **Architecture:** Zero-dependency static files for instant loading.

## 🏗️ Site Architecture & User Flows
The site is structured around specific user journeys:

* **Core Pages:**
    * `index.html` — Hero section with refined CTA, value prop, and overview grid.
    * `tools.html` — Central hub for all health calculators and assessment tools.
    * `shop.html` — Curated products with filtering (supplements, nutrition, equipment).

* **The "Personalization" Flow:**
    * `workout.html` → `fitness-level.html` → `age-select.html` → `workout-plan.html`
    * *Logic:* Guides user from gender selection to a custom workout plan.

* **Resources & Data:**
    * `diet-plan.html` — Meal plans with detailed nutrition facts.
    * `resources.html` — Nutrition tiles, lifestyle features, and store integration.
    * `resource-detail.html` — Food database with checkout flow simulation.

## 🚀 How to Run Locally
Since this is a static site, it requires no complex build steps.

**Using Python:**
```bash
python -m http.server 8080
