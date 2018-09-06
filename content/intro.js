export const bullets = [
  {
    icon: "https://icon.now.sh/compose/6164B2",
    button: "apply now",
    href: "",
    note: "out-of-rice applications have closed!"
  },
  {
    icon: "https://icon.now.sh/calendar/6164B2",
    button: "september 14–16, 2018",
    href: "",
    note: "36 hours of non-stop building"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    button: "held @ rice memorial center",
    href: "",
    note: "on our majestic campus in houston"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});

export const cards = [
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Schedule",
    href: "",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "FAQs",
    href: "",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Sponsors",
    href: "../static/sponsors.pdf",
    text: "Want to recruit and mentor our hackers? View our tiers →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Judging",
    href: "",
    text: "How will your project be evaluated? Read on →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Questions?",
    href: "",
    text: "Read answers to popular questions about HackRice →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Contact",
    href: "mailto:achal@rice.edu",
    text: "Have a question? Reach out via email →"
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Prizes",
    href: "",
    text: ""
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Maps",
    href: "",
    text: ""
  },
  {
    icon: "https://icon.now.sh/wb_sunny/6164B2",
    title: "Help",
    href: "",
    text: ""
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
})
