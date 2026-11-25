/*
  "Scam or Safe?" scenarios
  -------------------------------------------------------------------------
  Every person, organization, phone number, and web address below is
  made up for teaching.

  - Phone numbers use the 555-0100 to 555-0199 range, which is reserved
    for fiction and never assigned to real people.
  - Web addresses end in ".example", a name reserved so that it can never
    be a real, working website. They are shown as plain text, never as links.

  To edit or add a scenario, copy one block { ... } and change the text.
  Fields:
    channel     How the message arrived (shown above the title)
    title       Short heading
    setup       One sentence of context (optional)
    from        Who it appears to be from (optional)
    message     The message itself (line breaks are kept)
    answer      "scam" or "safe"
    explanation One or two sentences explaining the answer
    signs       Bullet points: warning signs (scam) or reassuring signs (safe)
    tip         One practical habit to remember
*/

window.YESOD_SCENARIOS = [
  {
    channel: "Text message",
    title: "An alert from your bank",
    from: "From: (646) 555-0182",
    message:
      "RIVERSIDE COMMUNITY BANK: We detected an unusual sign-in to your account. Your access will be locked in 30 minutes. Verify your identity now at riverside-bank-secure.example",
    answer: "scam",
    explanation:
      "It uses fear and a short deadline to push you to a website where you would be asked to type your banking details.",
    signs: [
      "A countdown (“locked in 30 minutes”) designed to rush you.",
      "A link to a web address that is not the bank’s usual website.",
      "It arrived from an ordinary phone number, not a number you know belongs to your bank."
    ],
    tip:
      "Don’t use links or phone numbers from an unexpected alert. Call the number on the back of your card or open your bank’s app the way you normally do."
  },
  {
    channel: "Text message",
    title: "Your prescription is ready",
    setup: "You asked your pharmacy for a refill two days ago and signed up for pickup reminders.",
    from: "From: Maple Street Pharmacy",
    message:
      "Maple Street Pharmacy: A prescription for you is ready for pickup at our Oak Avenue location. Reply STOP to end reminders.",
    answer: "safe",
    explanation:
      "It matches something you actually did, and it doesn’t ask you to click anything, pay anything, or share any information.",
    signs: [
      "You were expecting it: you requested a refill and signed up for reminders.",
      "No link, no payment, and no request for personal details.",
      "It simply tells you to come in, which you can do on your own schedule."
    ],
    tip:
      "A message that only shares information, and that matches something you were expecting, is usually low-risk. If anything seems off, call the pharmacy using the number on your prescription label."
  },
  {
    channel: "Phone call",
    title: "A grandchild in trouble",
    setup: "Late in the evening, your phone rings. The voice sounds exactly like your grandson.",
    from: "Caller ID: Unknown number",
    message:
      "“Grandma, it’s me. I’m in trouble. I was in a car accident and the police are holding me. I need $3,000 for bail right away. Please don’t tell Mom and Dad, they’ll be so angry. A lawyer will call you to explain how to send the money.”",
    answer: "scam",
    explanation:
      "The voice may sound real, but with artificial intelligence (AI), scammers can copy a person’s voice from a short video or voicemail posted online.",
    signs: [
      "An emergency that needs money immediately.",
      "A request to keep it secret from the rest of the family.",
      "A second person (“a lawyer”) will call to arrange payment.",
      "An unknown number, even though the caller says they are family."
    ],
    tip:
      "Hang up and call your grandchild, or their parents, using a number you already have. Many families agree on a private code word that only they know, to use in a real emergency."
  },
  {
    channel: "Email",
    title: "Library books are due",
    setup: "You borrowed three books from your local library two weeks ago.",
    from: "From: Elmwood Public Library <notices@elmwoodlibrary.example>",
    message:
      "Hello,\n\nThis is a friendly reminder that 3 items you borrowed are due this Friday. You can renew them at the front desk, by calling your branch, or by signing in to your library account the way you usually do.\n\nThank you,\nElmwood Public Library",
    answer: "safe",
    explanation:
      "It matches something you know is true, and it lets you choose how to respond, including in person or by phone.",
    signs: [
      "The details are correct: you really did borrow three books.",
      "No pressure, threats, or payment demands.",
      "It suggests you use your usual sign-in instead of a special link."
    ],
    tip:
      "Even when an email looks fine, it’s a good habit to reach your accounts the way you normally do, such as a saved bookmark, rather than through links in emails."
  },
  {
    channel: "Text message",
    title: "A package couldn’t be delivered",
    setup: "You aren’t expecting any deliveries this week.",
    from: "From: (718) 555-0119",
    message:
      "PARCEL NOTICE: Your package could not be delivered due to an incomplete address. A $1.99 redelivery fee is required. Update your details within 24 hours: parcel-redeliver.example",
    answer: "scam",
    explanation:
      "The small fee is a trick to get your card number, which scammers can then use for much larger charges.",
    signs: [
      "You weren’t expecting a package.",
      "It doesn’t name a real company or a tracking number you recognize.",
      "A small fee and a 24-hour deadline.",
      "A link asking you to enter your details."
    ],
    tip:
      "If you are expecting a delivery, check its status using the tracking information from the store where you ordered, not a link in a surprise text."
  },
  {
    channel: "Computer pop-up",
    title: "A warning on your screen",
    setup: "While reading a news website, your screen suddenly fills with a flashing red warning and a loud alarm sound.",
    message:
      "WARNING! YOUR COMPUTER IS INFECTED WITH 5 VIRUSES.\nYour personal files and bank information are at risk.\nDo NOT turn off your computer.\nCall Certified Support immediately: 1-800-555-0164",
    answer: "scam",
    explanation:
      "Real security warnings don’t ask you to call a phone number. The people on the other end may try to take control of your computer or charge you for fake repairs.",
    signs: [
      "Alarming language, flashing colors, and sounds meant to frighten you.",
      "Instructions not to turn off your computer.",
      "A phone number to call for “support.”"
    ],
    tip:
      "Don’t call the number. Close the browser window. If it won’t close, turn the computer off and on again. If you’re still worried, ask someone you trust to take a look."
  },
  {
    channel: "Text message",
    title: "A note from your daughter",
    setup: "This arrives in your existing message conversation with your daughter, from the number you’ve always had saved for her.",
    from: "From: Rachel (saved contact)",
    message: "Running about 10 minutes late for dinner. Save me a seat! See you soon ❤️",
    answer: "safe",
    explanation:
      "It comes from a contact you’ve saved and talked with before, it fits your plans, and it doesn’t ask you to do anything risky.",
    signs: [
      "It’s in your usual conversation with a saved contact.",
      "It matches plans you already made.",
      "No request for money, codes, or secrecy."
    ],
    tip:
      "Be more careful when a “family member” writes from a new number and says their phone broke, especially if money comes up next. Call their usual number to check."
  },
  {
    channel: "Phone call",
    title: "Your electricity will be shut off",
    from: "Caller ID: Bright Valley Power",
    message:
      "“This is Bright Valley Power. Your account is past due and a crew is on the way to disconnect your service within the hour. To stop the shut-off, you must pay $480 today using gift cards from a nearby store. Stay on the line and read me the numbers on the back.”",
    answer: "scam",
    explanation:
      "Utility companies do not demand payment in gift cards, and caller ID names can be faked.",
    signs: [
      "A demand for payment in gift cards.",
      "A threat with a very short deadline (“within the hour”).",
      "Pressure to stay on the line so you don’t have time to check."
    ],
    tip:
      "Anyone who asks for payment by gift card is a scammer. Hang up, find the number on your latest bill, and call the company yourself."
  },
  {
    channel: "Voicemail",
    title: "An appointment reminder",
    setup: "You booked a checkup last month for this Thursday at 10 a.m.",
    from: "From: Lakeside Family Medicine",
    message:
      "“Hi, this is Lakeside Family Medicine calling to remind you of your appointment this Thursday at 10 a.m. If you need to reschedule, please call the office at the number on your appointment card. Thank you!”",
    answer: "safe",
    explanation:
      "It matches an appointment you made and points you to a number you already have, rather than asking for personal information.",
    signs: [
      "The appointment details are correct.",
      "It asks you to use the number on your own appointment card.",
      "No request for your insurance, Social Security, or payment details."
    ],
    tip:
      "Legitimate messages often say “call the number you have for us.” Scam messages usually give you a new number to call."
  },
  {
    channel: "Social media message",
    title: "A new online friend needs help",
    setup: "For three weeks you’ve been chatting with someone you met in an online gardening group. You have never met in person or talked on video.",
    from: "From: “Daniel M.”",
    message:
      "I hate to ask, you’re the only one I can trust. I’m working overseas and my bank account is frozen. Could you buy $500 in gift cards and send me photos of the codes? I’ll pay you back as soon as I’m home. Please don’t mention this to anyone, they wouldn’t understand.",
    answer: "scam",
    explanation:
      "Building a friendship online and then asking for money is a common pattern, and it can go on for weeks before the request comes.",
    signs: [
      "You have never met or seen each other on a live video call.",
      "A sudden emergency that requires money.",
      "Payment in gift cards.",
      "A request to keep it secret."
    ],
    tip:
      "Never send money, gift cards, or codes to someone you have only met online. Talking it over with a friend or relative can help you see the situation clearly."
  },
  {
    channel: "Online video",
    title: "A famous host recommends an investment",
    setup: "A video appears in your social media feed. It shows a well-known TV financial host speaking directly to the camera.",
    message:
      "“I’m sharing my personal secret with you today. This new platform turns $250 into $5,000 in just one month, completely guaranteed. Spots are almost gone. Click below to sign up before it closes tonight.”",
    answer: "scam",
    explanation:
      "AI tools can create fake videos (often called “deepfakes”) that make a real public figure appear to say things they never said.",
    signs: [
      "A promise of huge, “guaranteed” returns. No real investment is guaranteed.",
      "Pressure to act tonight before “spots” run out.",
      "A celebrity endorsement that appears in an ad, not on the person’s official channels.",
      "Lips, voice, or face that may look slightly unnatural."
    ],
    tip:
      "Be cautious with any investment you find through an ad or social media. Talk to someone you trust, and research the company independently, before sending money."
  },
  {
    channel: "Phone call",
    title: "You call your bank about a charge",
    setup: "You noticed a charge you don’t recognize. You turned your debit card over and called the phone number printed on the back.",
    from: "You called: the number on your card",
    message:
      "“Thank you for calling Riverside Community Bank. I can see the charge you mentioned. I’ve placed a temporary hold on your card while we look into it. Did you make this purchase yourself? We’ll mail you a new card within 7–10 days.”",
    answer: "safe",
    explanation:
      "You started the call using a number you trust, and the representative is helping without asking for your PIN, password, or a verification code.",
    signs: [
      "You placed the call yourself, using the number on your card.",
      "The bank is protecting your account, not asking you to move money.",
      "No request for your PIN, full password, or a code sent to your phone."
    ],
    tip:
      "This is the safest habit of all: when in doubt, hang up and call back using a number you already trust. A real organization will understand."
  }
];
