window.FORM_CONFIG = {
  "source": "tumblrone",
  "repo": "tumblrone_form",
  "product": "tumblrone",
  "sourceForm": "tumblrone.html",
  "context": "interactive midnight-blue tumblr dashboard feed with 5 posts, tap-to-reveal favorites list, 3-option poll, milestone counter, notes drawer, and verified truth love confession.",
  "motif": "🎟️",
  "media": "2 foto profil (creator & recipient), dan foto-foto post Tumblr (photo-entry, photo-list, photo-01, photo-02, photo-final)",
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
      "title": "core tumblr identity",
      "fields": [
        {
          "key": "creator_name",
          "label": "creator name & username (sender)",
          "placeholder": "isi nama & username pengirim, contoh: Keith. · @keonho",
          "long": false,
          "required": true
        },
        {
          "key": "recipient_name",
          "label": "recipient name & username (crush/partner)",
          "placeholder": "isi nama & username pasangan, contoh: keisha! · @kya",
          "long": false,
          "required": true
        },
        {
          "key": "entry_date",
          "label": "date stamp / anniversary date",
          "placeholder": "isi tanggal postingan / anniversary, contoh: September 1, 2026",
          "long": false,
          "required": true
        },
        {
          "key": "avatars_link",
          "label": "profile photos / avatars (link)",
          "placeholder": "link gdrive / telegram untuk foto profil kedua pihak",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "03",
      "title": "scene 1: masterpost opening & comments",
      "fields": [
        {
          "key": "s1_badge",
          "label": "masterpost badge text",
          "placeholder": "contoh: private archive, for your eyes only",
          "long": false,
          "required": true
        },
        {
          "key": "s1_title",
          "label": "main title",
          "placeholder": "contoh: KEITH'S FAVORITES",
          "long": false,
          "required": true
        },
        {
          "key": "s1_subtitle",
          "label": "main subtitle",
          "placeholder": "contoh: a very biased list. • made with love",
          "long": false,
          "required": true
        },
        {
          "key": "s1_photo_caption",
          "label": "photo caption",
          "placeholder": "contoh: 3 months in and i still take photos of you without you noticing",
          "long": false,
          "required": true
        },
        {
          "key": "s1_tags",
          "label": "tumblr tags (#)",
          "placeholder": "contoh: #keisha! #favorites #3 months mensive #archive #only you",
          "long": false,
          "required": true
        },
        {
          "key": "s1_comment1",
          "label": "drawer comment 1 (recipient)",
          "placeholder": "contoh: wait you really made a whole tumblr dashboard for me?? 😭",
          "long": false,
          "required": true
        },
        {
          "key": "s1_comment2",
          "label": "drawer comment 2 (sender OP)",
          "placeholder": "contoh: had to do it right. read the whole thing :)",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "04",
      "title": "scene 2: favorites archive (4 evidence items)",
      "fields": [
        {
          "key": "s2_item1_text",
          "label": "evidence 1 text & tag",
          "placeholder": "contoh: eating pizza and looking at you (tag: favorite dinner spot)",
          "long": false,
          "required": true
        },
        {
          "key": "s2_item2_text",
          "label": "evidence 2 text & tag",
          "placeholder": "contoh: your laugh when you think nobody's listening (tag: candid audio)",
          "long": false,
          "required": true
        },
        {
          "key": "s2_item3_text",
          "label": "evidence 3 text & tag",
          "placeholder": "contoh: holding your cold hands in winter (tag: top 3 feeling)",
          "long": false,
          "required": true
        },
        {
          "key": "s2_item4_text",
          "label": "evidence 4 text & tag",
          "placeholder": "contoh: the way you exist in my life (tag: all-time best)",
          "long": false,
          "required": true
        },
        {
          "key": "s2_tags",
          "label": "tumblr tags (#)",
          "placeholder": "contoh: #text post #confessions #keisha!! #evidence",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "05",
      "title": "scene 3: tumblr interactive poll (3 options)",
      "fields": [
        {
          "key": "s3_question",
          "label": "poll question",
          "placeholder": "contoh: who is literally all i think about lately?",
          "long": false,
          "required": true
        },
        {
          "key": "s3_opt1",
          "label": "poll option 1 (correct)",
          "placeholder": "contoh: keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "s3_opt2",
          "label": "poll option 2",
          "placeholder": "contoh: also keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "s3_opt3",
          "label": "poll option 3",
          "placeholder": "contoh: definitely keisha!",
          "long": false,
          "required": true
        },
        {
          "key": "s3_verdict",
          "label": "poll verdict / resolution text",
          "placeholder": "contoh: correct. it's keisha. as if it could ever be anyone else.",
          "long": true,
          "required": true
        },
        {
          "key": "s3_caption",
          "label": "poll photo caption",
          "placeholder": "contoh: the prettiest girl in my camera roll, no competition",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "06",
      "title": "scene 4: milestone tracker & timeline",
      "fields": [
        {
          "key": "s4_eyebrow",
          "label": "timeline eyebrow text",
          "placeholder": "contoh: HOW LONG HAVE WE BEEN US?",
          "long": false,
          "required": true
        },
        {
          "key": "s4_m1",
          "label": "milestone 1 (month 1)",
          "placeholder": "contoh: the beginning.",
          "long": false,
          "required": true
        },
        {
          "key": "s4_m2",
          "label": "milestone 2 (month 2)",
          "placeholder": "contoh: getting closer.",
          "long": false,
          "required": true
        },
        {
          "key": "s4_m3_badge",
          "label": "milestone 3 badge title",
          "placeholder": "contoh: 03 MONTHS WITH YOU",
          "long": false,
          "required": true
        },
        {
          "key": "s4_m3_msg",
          "label": "milestone 3 message",
          "placeholder": "contoh: that's today. and you're still the best thing that's ever happened to me.",
          "long": true,
          "required": true
        },
        {
          "key": "s4_caption",
          "label": "milestone photo caption",
          "placeholder": "contoh: three months of late night dates and i still get butterflies",
          "long": false,
          "required": true
        }
      ]
    },
    {
      "id": "07",
      "title": "scene 5: verified truth confession & comments",
      "fields": [
        {
          "key": "s5_prompt",
          "label": "final question / prompt",
          "placeholder": "contoh: so, keisha!... who's the only one keith will ever want?",
          "long": false,
          "required": true
        },
        {
          "key": "s5_banner",
          "label": "verified truth banner",
          "placeholder": "contoh: VERIFIED TRUTH: keisha! always was, always will be.",
          "long": false,
          "required": true
        },
        {
          "key": "s5_message",
          "label": "love letter / final message",
          "placeholder": "contoh: happy 3 months, keisha! you're stuck with me now :)",
          "long": true,
          "required": true
        },
        {
          "key": "s5_caption",
          "label": "final photo caption",
          "placeholder": "contoh: to many more months, more memories, more of you.",
          "long": false,
          "required": true
        },
        {
          "key": "s5_comment_recip",
          "label": "final drawer comment (recipient)",
          "placeholder": "contoh: happy 3 months keith 🥺 i love you so much",
          "long": false,
          "required": true
        },
        {
          "key": "s5_comment_sender",
          "label": "final drawer reply (sender OP)",
          "placeholder": "contoh: i love you more. always.",
          "long": false,
          "required": true
        }
      ]
    }
  ]
};
