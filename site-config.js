window.FORM_CONFIG = {
  "product": {
    "code": "tumblrone",
    "name": "tumblrone",
    "badge": "interactive tumblr dashboard feed",
    "price": 10000,
    "priceFormatted": "Rp 10.000",
    "tagline": "interactive midnight-blue tumblr dashboard feed with 5 posts, tap-to-reveal favorites list, 3-option poll, milestone counter, notes drawer, and verified truth love confession."
  },
  "context": {
    "formCode": "tumblrone-2026-09",
    "motif": "🎟️",
    "mediaDescription": "kirim 2 foto profil (creator & recipient), dan foto-foto post Tumblr (photo-entry, photo-list, photo-01, photo-02, photo-final)"
  },
  "theme": {
    "palette": {
      "accent": "#529ecc",
      "accentRgb": "82, 158, 204",
      "accentDeep": "#35465c",
      "paper": "#121b28",
      "ink": "#f2f5f8",
      "muted": "#7c8c9e",
      "border": "#28384d",
      "tint": "rgba(82, 158, 204, 0.15)"
    },
    "fontPreset": "fraunces-karla"
  },
  "sections": [
    {
      "id": "sec_identity",
      "title": "Core Tumblr Identity",
      "subtitle": "username, nama profil, dan tanggal",
      "fields": [
        {
          "id": "creator_name",
          "label": "creator name & username (sender)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Keith. · @keonho",
          "description": "Nama pengirim dan username Tumblr"
        },
        {
          "id": "recipient_name",
          "label": "recipient name & username (crush/partner)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. keisha! · @kya",
          "description": "Nama pasangan dan username Tumblr"
        },
        {
          "id": "entry_date",
          "label": "date stamp / anniversary date",
          "type": "text",
          "required": true,
          "placeholder": "e.g. September 1, 2026",
          "description": "Tanggal postingan / anniversary"
        },
        {
          "id": "avatars_link",
          "label": "profile photos / avatars (link)",
          "type": "text",
          "required": true,
          "placeholder": "link gdrive / telegram (foto sender & recipient)",
          "description": "Foto profil Tumblr untuk kedua pihak"
        }
      ]
    },
    {
      "id": "sec_scene1",
      "title": "Scene 1: Masterpost Opening & Comments",
      "subtitle": "post pembuka dashboard, masterpost badge, foto & komentar",
      "fields": [
        {
          "id": "s1_badge",
          "label": "masterpost badge text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. private archive, for your eyes only",
          "description": "Badge di atas judul postingan"
        },
        {
          "id": "s1_title",
          "label": "main title",
          "type": "text",
          "required": true,
          "placeholder": "e.g. KEITH'S FAVORITES",
          "description": "Judul besar post pembuka"
        },
        {
          "id": "s1_subtitle",
          "label": "main subtitle",
          "type": "text",
          "required": true,
          "placeholder": "e.g. a very biased list. • made with love",
          "description": "Sub-judul di bawah judul besar"
        },
        {
          "id": "s1_photo_caption",
          "label": "photo caption",
          "type": "text",
          "required": true,
          "placeholder": "e.g. 3 months in and i still take photos of you without you noticing",
          "description": "Caption foto pembuka"
        },
        {
          "id": "s1_tags",
          "label": "tumblr tags (#)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. #keisha! #favorites #3 months mensive #archive #only you",
          "description": "Tagar Tumblr di bawah postingan"
        },
        {
          "id": "s1_comment1",
          "label": "drawer comment 1 (recipient)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. wait you really made a whole tumblr dashboard for me?? 😭",
          "description": "Komentar pertama dari pasangan di notes drawer"
        },
        {
          "id": "s1_comment2",
          "label": "drawer comment 2 (sender OP)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. had to do it right. read the whole thing :)",
          "description": "Balasan pengirim di notes drawer"
        }
      ]
    },
    {
      "id": "sec_scene2",
      "title": "Scene 2: Favorites Archive (4 Evidence Items)",
      "subtitle": "4 hal/momen favorit interaktif yang bisa dibuka",
      "fields": [
        {
          "id": "s2_item1_text",
          "label": "evidence 1 text & tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. eating pizza and looking at you (tag: favorite dinner spot)",
          "description": "Hal favorit ke-1"
        },
        {
          "id": "s2_item2_text",
          "label": "evidence 2 text & tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. your laugh when you think nobody's listening (tag: candid audio)",
          "description": "Hal favorit ke-2"
        },
        {
          "id": "s2_item3_text",
          "label": "evidence 3 text & tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. holding your cold hands in winter (tag: top 3 feeling)",
          "description": "Hal favorit ke-3"
        },
        {
          "id": "s2_item4_text",
          "label": "evidence 4 text & tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. the way you exist in my life (tag: all-time best)",
          "description": "Hal favorit ke-4"
        },
        {
          "id": "s2_tags",
          "label": "tumblr tags (#)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. #text post #confessions #keisha!! #evidence",
          "description": "Tagar Tumblr post 2"
        }
      ]
    },
    {
      "id": "sec_scene3",
      "title": "Scene 3: Tumblr Interactive Poll (Post 03)",
      "subtitle": "pertanyaan poll, 3 opsi jawaban, hasil reaksi, dan caption foto",
      "fields": [
        {
          "id": "s3_question",
          "label": "poll question",
          "type": "text",
          "required": true,
          "placeholder": "e.g. who is literally all i think about lately?",
          "description": "Pertanyaan polling"
        },
        {
          "id": "s3_opt1",
          "label": "poll option 1 (correct)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. keisha!",
          "description": "Pilihan 1 (opsi benar)"
        },
        {
          "id": "s3_opt2",
          "label": "poll option 2",
          "type": "text",
          "required": true,
          "placeholder": "e.g. also keisha!",
          "description": "Pilihan 2"
        },
        {
          "id": "s3_opt3",
          "label": "poll option 3",
          "type": "text",
          "required": true,
          "placeholder": "e.g. definitely keisha!",
          "description": "Pilihan 3"
        },
        {
          "id": "s3_verdict",
          "label": "poll resolution / verdict text",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. correct. it's keisha. as if it could ever be anyone else.",
          "description": "Teks respon ketika opsi diklik"
        },
        {
          "id": "s3_caption",
          "label": "photo caption",
          "type": "text",
          "required": true,
          "placeholder": "e.g. the prettiest girl in my camera roll, no competition",
          "description": "Caption foto di bawah polling"
        }
      ]
    },
    {
      "id": "sec_scene4",
      "title": "Scene 4: Milestone Tracker & Timeline (Post 04)",
      "subtitle": "3 tahapan milestone hubungan, pesan tanggal, dan foto kenangan",
      "fields": [
        {
          "id": "s4_eyebrow",
          "label": "timeline eyebrow text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. HOW LONG HAVE WE BEEN US?",
          "description": "Judul eyebrow milestone"
        },
        {
          "id": "s4_m1",
          "label": "milestone 1 (month 1)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. the beginning.",
          "description": "Teks milestone 1"
        },
        {
          "id": "s4_m2",
          "label": "milestone 2 (month 2)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. getting closer.",
          "description": "Teks milestone 2"
        },
        {
          "id": "s4_m3_badge",
          "label": "milestone 3 badge title",
          "type": "text",
          "required": true,
          "placeholder": "e.g. 03 MONTHS WITH YOU",
          "description": "Judul badge milestone 3"
        },
        {
          "id": "s4_m3_msg",
          "label": "milestone 3 message",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. that's today. and you're still the best thing that's ever happened to me.",
          "description": "Pesan milestone hari ini"
        },
        {
          "id": "s4_caption",
          "label": "milestone photo caption",
          "type": "text",
          "required": true,
          "placeholder": "e.g. three months of late night dates and i still get butterflies",
          "description": "Caption foto milestone"
        }
      ]
    },
    {
      "id": "sec_scene5",
      "title": "Scene 5: Verified Truth Confession (Post 05)",
      "subtitle": "pertanyaan penutup, verified truth banner, pesan cinta & closing comments",
      "fields": [
        {
          "id": "s5_prompt",
          "label": "final question / prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. so, keisha!... who's the only one keith will ever want?",
          "description": "Pertanyaan penutup"
        },
        {
          "id": "s5_banner",
          "label": "verified truth banner",
          "type": "text",
          "required": true,
          "placeholder": "e.g. VERIFIED TRUTH: keisha! always was, always will be.",
          "description": "Banner kebenaran terverifikasi"
        },
        {
          "id": "s5_message",
          "label": "love letter / final message",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. happy 3 months, keisha! you're stuck with me now :)",
          "description": "Surat / pesan penutup"
        },
        {
          "id": "s5_caption",
          "label": "final photo caption",
          "type": "text",
          "required": true,
          "placeholder": "e.g. to many more months, more memories, more of you.",
          "description": "Caption foto penutup"
        },
        {
          "id": "s5_comment_recip",
          "label": "final drawer comment (recipient)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. happy 3 months keith 🥺 i love you so much",
          "description": "Komentar penutup pasangan di notes"
        },
        {
          "id": "s5_comment_sender",
          "label": "final drawer reply (sender OP)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. i love you more. always.",
          "description": "Balasan penutup pengirim di notes"
        }
      ]
    }
  ]
};
