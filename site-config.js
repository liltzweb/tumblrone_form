window.FORM_CONFIG = {
  "source": "tumblrone",
  "repo": "tumblrone_form",
  "product": "tumblrone",
  "sourceForm": "tumblrone.html",
  "context": "interactive midnight-blue tumblr dashboard feed with 5 interactive posts: entry masterpost with comments drawer, 4 tap-to-reveal evidence list items, 3-option interactive poll with verdict bubble, 3-step milestone timeline counter, and verified truth final love confession with notes comments.",
  "motif": "🎟️",
  "media": "kirim 2 foto profil (avatar pengirim & avatar pasangan) + 5 foto feed Tumblr (photo-entry, photo-list, photo-01, photo-02, photo-final)",
  "theme": "tumblrone",
  "price": 10000,
  "palette": [
    "#529ECC",
    "#35465C",
    "#121B28",
    "#F2F5F8",
    "#7C8C9E",
    "#28384D"
  ],
  "sections": [
    {
      "id": "02",
      "title": "core tumblr profile & couple meta",
      "fields": [
        {
          "key": "sender_name",
          "label": "sender full display name",
          "placeholder": "contoh: Keith.",
          "long": false,
          "required": true
        },
        {
          "key": "sender_short",
          "label": "sender nickname / short name",
          "placeholder": "contoh: Keith",
          "long": false,
          "required": true
        },
        {
          "key": "sender_handle",
          "label": "sender tumblr handle (@username)",
          "placeholder": "contoh: @keonho",
          "long": false,
          "required": true
        },
        {
          "key": "recipient_name",
          "label": "recipient full display name",
          "placeholder": "contoh: keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "recipient_short",
          "label": "recipient nickname / short name",
          "placeholder": "contoh: Keisha",
          "long": false,
          "required": true
        },
        {
          "key": "recipient_handle",
          "label": "recipient tumblr handle (@username)",
          "placeholder": "contoh: @kya",
          "long": false,
          "required": true
        },
        {
          "key": "date_formatted",
          "label": "anniversary / milestone date formatted",
          "placeholder": "contoh: September 1, 2026",
          "long": false,
          "required": true
        },
        {
          "key": "date_code",
          "label": "short date code stamp",
          "placeholder": "contoh: 01 / 09 / 26",
          "long": false,
          "required": true
        },
        {
          "key": "months_count",
          "label": "months / days milestone count",
          "placeholder": "contoh: 3 (untuk 3 bulan / 3 months)",
          "long": false,
          "required": true
        },
        {
          "key": "avatars_link",
          "label": "link 2 foto avatar (sender & recipient)",
          "placeholder": "link gdrive / telegram foto avatar pengirim dan pasangan",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "03",
      "title": "scene 1: tumblr masterpost entry & comments drawer",
      "fields": [
        {
          "key": "entry_badge",
          "label": "masterpost badge text",
          "placeholder": "contoh: private archive, for your eyes only",
          "long": false,
          "required": true
        },
        {
          "key": "entry_title",
          "label": "masterpost main title",
          "placeholder": "contoh: KEITH'S FAVORITES",
          "long": false,
          "required": true
        },
        {
          "key": "entry_subtitle",
          "label": "masterpost subtitle",
          "placeholder": "contoh: a ridiculously biased list.",
          "long": false,
          "required": true
        },
        {
          "key": "entry_quote",
          "label": "opening quote / message text",
          "placeholder": "contoh: made this whole page because you somehow made my whole world so much softer.",
          "long": true,
          "required": true
        },
        {
          "key": "entry_photo_caption",
          "label": "photo caption",
          "placeholder": "contoh: the face that started it all, still my favorite view",
          "long": false,
          "required": true
        },
        {
          "key": "entry_button",
          "label": "action button text",
          "placeholder": "contoh: open the archive (4 items)",
          "long": false,
          "required": true
        },
        {
          "key": "entry_tags",
          "label": "post tags (#)",
          "placeholder": "contoh: #keisha! #favorites #3 months mensive #archive #only you",
          "long": false,
          "required": true
        },
        {
          "key": "entry_comment_1",
          "label": "drawer comment 1 (recipient @kya)",
          "placeholder": "contoh: wait you really made a whole tumblr for me?",
          "long": false,
          "required": true
        },
        {
          "key": "entry_comment_2",
          "label": "drawer comment 2 (sender @keonho OP)",
          "placeholder": "contoh: obviously, had to make sure you know you're my favorite.",
          "long": false,
          "required": true
        },
        {
          "key": "entry_comment_3",
          "label": "drawer comment 3 (recipient @kya)",
          "placeholder": "contoh: you're actually the sweetest, stop",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "04",
      "title": "scene 2: the list (4 tap-to-reveal evidence items)",
      "fields": [
        {
          "key": "list_title",
          "label": "post title",
          "placeholder": "contoh: THE LIST (atau FAVORITES)",
          "long": false,
          "required": true
        },
        {
          "key": "list_sublabel",
          "label": "post subtitle / sublabel",
          "placeholder": "contoh: the person behind every single good thing lately",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_1_prompt",
          "label": "evidence item 01 prompt (yang tampil sebelum di-tap)",
          "placeholder": "contoh: person i text the second i wake up",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_1_reveal",
          "label": "evidence item 01 revealed answer (jawaban saat di-tap)",
          "placeholder": "contoh: you, obviously.",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_2_prompt",
          "label": "evidence item 02 prompt",
          "placeholder": "contoh: person whose food i let steal mine",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_2_reveal",
          "label": "evidence item 02 revealed answer",
          "placeholder": "contoh: still you.",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_3_prompt",
          "label": "evidence item 03 prompt",
          "placeholder": "contoh: person i miss even when you just left",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_3_reveal",
          "label": "evidence item 03 revealed answer",
          "placeholder": "contoh: you already knew that.",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_4_prompt",
          "label": "evidence item 04 prompt",
          "placeholder": "contoh: person i'd choose over and over again",
          "long": false,
          "required": true
        },
        {
          "key": "list_item_4_reveal",
          "label": "evidence item 04 revealed answer",
          "placeholder": "contoh: keisha!!!",
          "long": false,
          "required": true
        },
        {
          "key": "list_photo_caption",
          "label": "photo caption",
          "placeholder": "contoh: eating pizza and looking this cute should actually be illegal",
          "long": false,
          "required": true
        },
        {
          "key": "list_button_ready",
          "label": "continue button text (after all 4 opened)",
          "placeholder": "contoh: you see the pattern now",
          "long": false,
          "required": true
        },
        {
          "key": "list_tags",
          "label": "post tags (#)",
          "placeholder": "contoh: #text post #confessions #keisha!! #evidence",
          "long": false,
          "required": true
        },
        {
          "key": "list_comment_1",
          "label": "drawer comment 1 (recipient @kya)",
          "placeholder": "contoh: the evidence is undeniable tbh",
          "long": false,
          "required": true
        },
        {
          "key": "list_comment_2",
          "label": "drawer comment 2 (sender @keonho OP)",
          "placeholder": "contoh: case closed, you have no defense.",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "05",
      "title": "scene 3: tumblr interactive poll & photo post",
      "fields": [
        {
          "key": "quiz_eyebrow",
          "label": "poll eyebrow text",
          "placeholder": "contoh: ONE QUICK QUESTION",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_question",
          "label": "poll question text",
          "placeholder": "contoh: who is literally all i think about lately?",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt1_label",
          "label": "poll option 1 label (jawaban benar / 98.4%)",
          "placeholder": "contoh: keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt1_resp",
          "label": "poll option 1 popup reaction",
          "placeholder": "contoh: obviously.",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt2_label",
          "label": "poll option 2 label (opsi jebakan 1)",
          "placeholder": "contoh: someone else",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt2_resp",
          "label": "poll option 2 popup reaction",
          "placeholder": "contoh: be serious right now.",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt3_label",
          "label": "poll option 3 label (opsi jebakan 2)",
          "placeholder": "contoh: no idea tell me",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_opt3_resp",
          "label": "poll option 3 popup reaction",
          "placeholder": "contoh: as if you don't already know.",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_resolution_title",
          "label": "poll resolution verdict title",
          "placeholder": "contoh: it's keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_resolution_sub",
          "label": "poll resolution verdict subtitle",
          "placeholder": "contoh: as if it could ever be anyone else.",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_photo_caption",
          "label": "poll photo caption",
          "placeholder": "contoh: the prettiest girl in my camera roll, no competition",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_button",
          "label": "continue button text",
          "placeholder": "contoh: keep reading the feed",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_tags",
          "label": "post tags (#)",
          "placeholder": "contoh: #tumblr poll #favorite person #saved by @keonho #photopost",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_comment_1",
          "label": "drawer comment 1 (recipient @kya)",
          "placeholder": "contoh: who voted someone else i just wanna talk",
          "long": false,
          "required": true
        },
        {
          "key": "quiz_comment_2",
          "label": "drawer comment 2 (sender @keonho OP)",
          "placeholder": "contoh: 100% rigged in your favor obviously",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "06",
      "title": "scene 4: timeline photoset & milestone counter",
      "fields": [
        {
          "key": "counter_eyebrow",
          "label": "milestone eyebrow text",
          "placeholder": "contoh: HOW LONG HAVE WE BEEN US?",
          "long": false,
          "required": true
        },
        {
          "key": "counter_step1_microcopy",
          "label": "milestone step 01 text (month 1)",
          "placeholder": "contoh: the day everything started making sense.",
          "long": false,
          "required": true
        },
        {
          "key": "counter_step2_microcopy",
          "label": "milestone step 02 text (month 2)",
          "placeholder": "contoh: falling for you a little more every day.",
          "long": false,
          "required": true
        },
        {
          "key": "counter_step3_microcopy",
          "label": "milestone step 03 text (month 3)",
          "placeholder": "contoh: still us, and you still light up every room you're in.",
          "long": false,
          "required": true
        },
        {
          "key": "counter_badge",
          "label": "milestone badge pill title",
          "placeholder": "contoh: 03 MONTHS WITH YOU",
          "long": false,
          "required": true
        },
        {
          "key": "counter_date",
          "label": "milestone date title",
          "placeholder": "contoh: SEPTEMBER 01, 2026",
          "long": false,
          "required": true
        },
        {
          "key": "counter_callout",
          "label": "milestone main callout text",
          "placeholder": "contoh: that's today.",
          "long": false,
          "required": true
        },
        {
          "key": "counter_sub",
          "label": "milestone heartfelt message",
          "placeholder": "contoh: and you're still the best thing that's ever happened to me.",
          "long": true,
          "required": true
        },
        {
          "key": "counter_photo_caption",
          "label": "milestone photo caption",
          "placeholder": "contoh: three months of late night dates and i still get butterflies",
          "long": false,
          "required": true
        },
        {
          "key": "counter_button",
          "label": "continue button text",
          "placeholder": "contoh: one last thing for you",
          "long": false,
          "required": true
        },
        {
          "key": "counter_tags",
          "label": "post tags (#)",
          "placeholder": "contoh: #3 months #milestone #still us #my favorite",
          "long": false,
          "required": true
        },
        {
          "key": "counter_comment_1",
          "label": "drawer comment 1 (recipient @kya)",
          "placeholder": "contoh: 3 months went by way too fast",
          "long": false,
          "required": true
        },
        {
          "key": "counter_comment_2",
          "label": "drawer comment 2 (sender @keonho OP)",
          "placeholder": "contoh: just getting started with you, promise.",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "07",
      "title": "scene 5: verified truth confession & final notes",
      "fields": [
        {
          "key": "final_eyebrow",
          "label": "final post badge / eyebrow",
          "placeholder": "contoh: ONE LAST THING",
          "long": false,
          "required": true
        },
        {
          "key": "final_prompt_intro",
          "label": "prompt intro text",
          "placeholder": "contoh: so, keisha!...",
          "long": false,
          "required": true
        },
        {
          "key": "final_question",
          "label": "final big question / prompt",
          "placeholder": "contoh: who's the only one keith will ever want?",
          "long": false,
          "required": true
        },
        {
          "key": "final_accepted_badge",
          "label": "accepted answer badge",
          "placeholder": "contoh: VERIFIED TRUTH",
          "long": false,
          "required": true
        },
        {
          "key": "final_accepted_answer",
          "label": "accepted answer recipient name",
          "placeholder": "contoh: keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "final_accepted_sub",
          "label": "accepted answer sub-headline",
          "placeholder": "contoh: always was, always will be.",
          "long": false,
          "required": true
        },
        {
          "key": "final_line_1",
          "label": "love letter line 01 (lead)",
          "placeholder": "contoh: happy 3 months, keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "final_line_2",
          "label": "love letter line 02 (highlight message)",
          "placeholder": "contoh: you're my favorite person in the entire world, hands down.",
          "long": true,
          "required": true
        },
        {
          "key": "final_line_3_sign",
          "label": "love letter line 03 (sender signature)",
          "placeholder": "contoh: Keith.",
          "long": false,
          "required": true
        },
        {
          "key": "final_photo_caption",
          "label": "final photo caption",
          "placeholder": "contoh: always running straight into my arms, forever my favorite person",
          "long": false,
          "required": true
        },
        {
          "key": "final_tags",
          "label": "post tags (#)",
          "placeholder": "contoh: #happy 3 months #keisha! #still my favorite #forever and ever #end of list",
          "long": false,
          "required": true
        },
        {
          "key": "final_comment_1",
          "label": "final drawer comment (recipient @kya)",
          "placeholder": "contoh: happy 3 months keith 🥺 i love you so much",
          "long": false,
          "required": true
        },
        {
          "key": "final_comment_2",
          "label": "final drawer comment (sender @keonho OP)",
          "placeholder": "contoh: always my favorite. happy 3 months keisha.",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "08",
      "title": "photo links & media assets",
      "fields": [
        {
          "key": "photo_entry_link",
          "label": "photo scene 1: masterpost entry photo",
          "placeholder": "link gdrive / telegram (contoh: photo-entry.jpg)",
          "long": false,
          "required": true
        },
        {
          "key": "photo_list_link",
          "label": "photo scene 2: favorites list photo",
          "placeholder": "link gdrive / telegram (contoh: photo-list.jpg)",
          "long": false,
          "required": true
        },
        {
          "key": "photo_quiz_link",
          "label": "photo scene 3: poll portrait photo",
          "placeholder": "link gdrive / telegram (contoh: photo-01.jpg)",
          "long": false,
          "required": true
        },
        {
          "key": "photo_counter_link",
          "label": "photo scene 4: milestone snapshot photo",
          "placeholder": "link gdrive / telegram (contoh: photo-02.jpg)",
          "long": false,
          "required": true
        },
        {
          "key": "photo_final_link",
          "label": "photo scene 5: ending closure photo",
          "placeholder": "link gdrive / telegram (contoh: photo-final.jpg)",
          "long": false,
          "required": true
        }
      ]
    }
  ]
};
