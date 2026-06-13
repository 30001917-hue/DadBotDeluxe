const chatbox = document.getElementById("chatbox");

function addMsg(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerHTML = text;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function send() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  setTimeout(() => {
    addMsg(botReply(text), "bot");
    triggerEffects(text);
  }, 500);
}

function quick(type) {
  addMsg("👉 " + type, "user");

  setTimeout(() => {
    addMsg(botReply(type), "bot");
    triggerEffects(type);
  }, 500);
}

function triggerEffects(text) {
  text = text.toLowerCase();

  if (text.includes("birthday")) {
    document.body.style.animation = "flash 1s 2";
    launchBalloons();
  }
}

function botReply(input) {
  input = input.toLowerCase();

  // 🎂 Birthday
  if (input.includes("birthday")) {
    return "🎂 HAPPY BIRTHDAY!! I hope your day is full of love, cake, and happiness 🎉";
  }

  // 😂 JOKES
  if (input.includes("joke")) {
    const jokes = [
      "😂 Why don’t skeletons fight? They don’t have the guts!",
      "😂 Why did the laptop go to school? To improve its CPU!",
      "😂 I told my WiFi a joke… now it’s connected to laughter!"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // 🍳 VEG RECIPES (WITH LINKS)
  if (input.includes("recipe")) {
    return `
🍳 VEG RECIPES YOU CAN TRY:

🥗 Paneer Butter Masala:
https://www.indianhealthyrecipes.com/paneer-butter-masala/

🍛 Chana Masala:
https://www.indianhealthyrecipes.com/chana-masala/

🍲 Vegetable Biryani:
https://www.vegrecipesofindia.com/veg-biryani-recipe/

🥪 Veg Sandwich:
https://www.vegrecipesofindia.com/veg-sandwich-recipe/

👉 Pick one and enjoy cooking! 👨‍🍳
`;
  }

  // 🎵 MUSIC
  if (input.includes("music")) {
    const music = [
      "🎵 Imagine Dragons - Believer",
      "🎵 Ed Sheeran - Perfect",
      "🎵 Coldplay - Viva La Vida",
      "🎵 Lo-fi Beats for relaxation",
      "🎵 Arijit Singh - soft Bollywood playlist"
    ];
    return "🎵 MUSIC PICKS:\n\n" + music.join("\n");
  }

  // 🌍 TRAVEL ITINERARIES
  if (input.includes("travel")) {
    return `
🌍 TRAVEL ITINERARIES:

🇯🇵 JAPAN (5 Days):
Day 1: Tokyo - Shibuya, street food
Day 2: Kyoto - temples, bamboo forest
Day 3: Osaka - food tour
Day 4: Nara deer park
Day 5: Shopping + culture

🇨🇭 SWITZERLAND (4 Days):
Day 1: Zurich city
Day 2: Lucerne lake
Day 3: Alps mountain train
Day 4: Scenic villages

🇺🇸 NEW YORK (3 Days):
Day 1: Times Square + Central Park
Day 2: Statue of Liberty
Day 3: Museums + shopping

🌟 Tell me a country and I’ll plan more!
`;
  }

  // 📚 FACTS
  if (input.includes("fact")) {
    const facts = [
      "📚 Honey never spoils — even after 3000 years!",
      "📚 Octopuses have 3 hearts ❤️❤️❤️",
      "📚 Sharks existed before trees!",
      "📚 Bananas are technically berries 🍌",
      "📚 A day on Venus is longer than a year there!"
    ];
    return facts[Math.floor(Math.random() * facts.length)];
  }

  return "🤖 Try asking me: joke, recipe, music, travel, fact, or birthday 🎂";
}

/* 🎈 BALLOONS */
function launchBalloons() {
  for (let i = 0; i < 10; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = randomColor();
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 5000);
  }
}

function randomColor() {
  const colors = ["#ff6b6b", "#6c5ce7", "#00b894", "#fdcb6e", "#e17055"];
  return colors[Math.floor(Math.random() * colors.length)];
}
