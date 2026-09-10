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
    "mediaDescription": "kirim 1 foto profil, 1 cover banner, dan foto-foto scene/post Tumblr (bisa berupa foto bersama atau memori)"
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
      "id": "sec_profile",
      "title": "Tumblr Profile & Header",
      "subtitle": "identitas dashboard tumblr di bagian atas",
      "fields": [
        {
          "id": "blog_title",
          "label": "blog username / title",
          "type": "text",
          "required": true,
          "placeholder": "e.g. keith's space / @keithliltz",
          "description": "Nama blog atau username Tumblr di header"
        },
        {
          "id": "blog_bio",
          "label": "blog bio / description",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. just a digital sanctuary for our shared memories, inside jokes, and quiet moments.",
          "description": "Deskripsi singkat profil blog"
        },
        {
          "id": "avatar_img",
          "label": "avatar / profile photo",
          "type": "text",
          "required": true,
          "placeholder": "link gdrive / telegram photo",
          "description": "Foto profil Tumblr"
        },
        {
          "id": "banner_img",
          "label": "header banner image (optional)",
          "type": "text",
          "required": false,
          "placeholder": "link banner atau biarkan default",
          "description": "Foto banner header (opsional)"
        }
      ]
    },
    {
      "id": "sec_scene1",
      "title": "Scene 1: Introduction Post & Tags",
      "subtitle": "post pertama pembuka feed Tumblr",
      "fields": [
        {
          "id": "s1_date",
          "label": "post timestamp / date",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Sept 10, 2024 · 11:42 PM",
          "description": "Waktu posting"
        },
        {
          "id": "s1_title",
          "label": "post title",
          "type": "text",
          "required": true,
          "placeholder": "e.g. CHAPTER ONE: WHERE IT ALL BEGAN",
          "description": "Judul postingan pembuka"
        },
        {
          "id": "s1_body",
          "label": "post content / text",
          "type": "textarea",
          "required": true,
          "placeholder": "Ceritakan awal mula, pertemuan pertama, atau momen berharga kalian...",
          "description": "Isi cerita/wording postingan pertama"
        },
        {
          "id": "s1_tags",
          "label": "post tags (#)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. #us #our story #since 2023 #memories",
          "description": "Tagar Tumblr di bawah post"
        }
      ]
    },
    {
      "id": "sec_scene2",
      "title": "Scene 2: Tap-to-Reveal Favorites List",
      "subtitle": "list interaktif hal-hal favorit yang bisa di-tap",
      "fields": [
        {
          "id": "s2_list_title",
          "label": "favorites list title",
          "type": "text",
          "required": true,
          "placeholder": "e.g. KEITH'S FAVORITES / THINGS I LOVE ABOUT YOU",
          "description": "Judul list favorit/suka"
        },
        {
          "id": "s2_item1",
          "label": "favorite item 1",
          "type": "text",
          "required": true,
          "placeholder": "e.g. your contagious laugh when you watch sitcoms",
          "description": "Poin favorit ke-1"
        },
        {
          "id": "s2_item2",
          "label": "favorite item 2",
          "type": "text",
          "required": true,
          "placeholder": "e.g. late night calls discussing random universe theories",
          "description": "Poin favorit ke-2"
        },
        {
          "id": "s2_item3",
          "label": "favorite item 3",
          "type": "text",
          "required": true,
          "placeholder": "e.g. that warm smile every time you see me",
          "description": "Poin favorit ke-3"
        },
        {
          "id": "s2_item4",
          "label": "favorite item 4",
          "type": "text",
          "required": false,
          "placeholder": "e.g. how caring and gentle you always are",
          "description": "Poin favorit ke-4 (opsional)"
        },
        {
          "id": "s2_item5",
          "label": "favorite item 5",
          "type": "text",
          "required": false,
          "placeholder": "e.g. our random matcha and coffee dates",
          "description": "Poin favorit ke-5 (opsional)"
        }
      ]
    },
    {
      "id": "sec_scene3",
      "title": "Scene 3: Interactive Tumblr Poll (3 Options)",
      "subtitle": "fitur polling interaktif Tumblr dengan 3 pilihan jawaban",
      "fields": [
        {
          "id": "s3_poll_question",
          "label": "poll question",
          "type": "text",
          "required": true,
          "placeholder": "e.g. what is our ultimate favorite date spot?",
          "description": "Pertanyaan polling"
        },
        {
          "id": "s3_poll_opt1",
          "label": "poll option 1",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Cozy Cafe & Matcha Latte",
          "description": "Pilihan polling 1"
        },
        {
          "id": "s3_poll_opt2",
          "label": "poll option 2",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Late Night Street Food Hunt",
          "description": "Pilihan polling 2"
        },
        {
          "id": "s3_poll_opt3",
          "label": "poll option 3",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Staying in & Watching Movies",
          "description": "Pilihan polling 3"
        }
      ]
    },
    {
      "id": "sec_scene4",
      "title": "Scene 4: Milestone Tracker & Photo Moments",
      "subtitle": "pencapaian/tonggak hubungan & foto memori",
      "fields": [
        {
          "id": "s4_m1_title",
          "label": "milestone 1 (title & date)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Day One - First Met (12 Oct 2023)",
          "description": "Milestone ke-1"
        },
        {
          "id": "s4_m2_title",
          "label": "milestone 2 (title & date)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. Official Anniversary (24 Dec 2023)",
          "description": "Milestone ke-2"
        },
        {
          "id": "s4_m3_title",
          "label": "milestone 3 (title & date)",
          "type": "text",
          "required": true,
          "placeholder": "e.g. 500 Days of Us & Beyond",
          "description": "Milestone ke-3"
        },
        {
          "id": "s4_photos",
          "label": "post photos (links)",
          "type": "textarea",
          "required": true,
          "placeholder": "Link Google Drive / Telegram untuk foto-foto yang dipajang di post ini",
          "description": "Foto-foto untuk postingan milestone"
        }
      ]
    },
    {
      "id": "sec_scene5",
      "title": "Scene 5: Verified Truth Confession & Love Letter",
      "subtitle": "pesan penutup mendalam & notes Tumblr",
      "fields": [
        {
          "id": "s5_truth_headline",
          "label": "confession headline / prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. truth or dare? · truth: do you really love me that much?",
          "description": "Prompt pertanyaan/kejujuran"
        },
        {
          "id": "s5_truth_answer",
          "label": "verified answer / letter",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. obviously, had to make sure you know you are my favorite person in the entire world...",
          "description": "Jawaban jujur / surat cinta penutup"
        },
        {
          "id": "s5_signoff",
          "label": "closing sign-off & date",
          "type": "text",
          "required": true,
          "placeholder": "e.g. forever yours, Keith · 2026",
          "description": "Nama pengirim / penutup"
        }
      ]
    }
  ]
};
