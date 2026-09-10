window.FORM_CONFIG = {
  product: {
    code: 'tumblrone',
    name: 'tumblrone',
    badge: 'interactive tumblr dashboard feed',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    tagline: 'interactive midnight-blue tumblr dashboard feed with 5 posts, tap-to-reveal favorites list, 3-option poll, milestone counter, notes drawer, and verified truth love confession.'
  },
  context: {
    formCode: 'TMBLR-ORD',
    edition: '2026 Tumblr Dashboard Edition',
    description: 'Tumblrone (D:\KATALOG LILTZ\KATALOG LILTZ TUMBLRONE) is a customized Tumblr dashboard feed website for couples featuring 5 interactive posts: Masterpost Cover, 4 Tap-to-Reveal Evidence Favorites, 3-Option Tumblr Poll & Portrait Winner, 3-Step Milestone Timeline Stepper with celebration card, and Final Love Note & Verified Truth confession, complete with Tumblr notes comments drawer and tags.'
  },
  motif: '🎟️',
  mediaDescription: '7 Foto (2 Avatar Profil + 5 Foto Postingan Feed Tumblr)',
  theme: {
    name: 'tumblrone',
    palette: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD', '#38B2AC']
  },
  sections: [
    {
      id: 'tumblr_identity',
      number: '02',
      title: 'Tumblr Identity & Profiles',
      description: 'Tumblr username handles, nicknames, avatars, search bar tag, and milestone duration.',
      fields: [
        {
          id: 'sender_name',
          label: 'Sender Display Name (Nama Pengirim)',
          type: 'text',
          placeholder: 'e.g. Keith.',
          defaultValue: 'Keith.',
          required: true,
          helpText: 'Display name pengirim di header setiap postingan.'
        },
        {
          id: 'sender_short',
          label: 'Sender Nickname / Short Name',
          type: 'text',
          placeholder: 'e.g. Keith',
          defaultValue: 'Keith',
          required: true
        },
        {
          id: 'sender_handle',
          label: 'Sender Tumblr Handle / Username',
          type: 'text',
          placeholder: 'e.g. @keonho',
          defaultValue: '@keonho',
          required: true,
          helpText: 'Username Tumblr pengirim.'
        },
        {
          id: 'recipient_name',
          label: 'Recipient Display Name (Nama Pasangan)',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true,
          helpText: 'Display name pasangan di feed.'
        },
        {
          id: 'recipient_short',
          label: 'Recipient Nickname / Short Name',
          type: 'text',
          placeholder: 'e.g. Keisha',
          defaultValue: 'Keisha',
          required: true
        },
        {
          id: 'recipient_handle',
          label: 'Recipient Tumblr Handle / Username',
          type: 'text',
          placeholder: 'e.g. @kya',
          defaultValue: '@kya',
          required: true,
          helpText: 'Username Tumblr pasangan.'
        },
        {
          id: 'search_tag',
          label: 'Top Navigation Search Bar Tag',
          type: 'text',
          placeholder: 'e.g. Search #keisha! #favorites',
          defaultValue: 'Search #keisha! #favorites',
          required: true,
          helpText: 'Teks placeholder di kotak search bar atas.'
        },
        {
          id: 'date_formatted',
          label: 'Main Date Formatted',
          type: 'text',
          placeholder: 'e.g. September 1, 2026',
          defaultValue: 'September 1, 2026',
          required: true
        },
        {
          id: 'date_code',
          label: 'Short Date Code',
          type: 'text',
          placeholder: 'e.g. 01 / 09 / 26',
          defaultValue: '01 / 09 / 26',
          required: true
        },
        {
          id: 'months_count',
          label: 'Milestone Duration (Jumlah Bulan / Angka)',
          type: 'text',
          placeholder: 'e.g. 3 (atau 1st Year, 100 Days)',
          defaultValue: '3',
          required: true
        }
      ]
    },
    {
      id: 'post_01_masterpost',
      number: '03',
      title: 'Post 01 — Masterpost Cover (#scene-entry)',
      description: 'Cover masterpost with romantic quote, golden hour photo, tags, and comment drawer.',
      fields: [
        {
          id: 'entry_badge',
          label: 'Post Badge',
          type: 'text',
          placeholder: 'e.g. private archive, for your eyes only',
          defaultValue: 'private archive, for your eyes only',
          required: true
        },
        {
          id: 'entry_title',
          label: 'Masterpost Title',
          type: 'text',
          placeholder: 'e.g. KEITH'S FAVORITES',
          defaultValue: 'KEITH'S FAVORITES',
          required: true
        },
        {
          id: 'entry_subtitle',
          label: 'Masterpost Subtitle',
          type: 'text',
          placeholder: 'e.g. a very biased list.',
          defaultValue: 'a very biased list.',
          required: true
        },
        {
          id: 'entry_quote',
          label: 'Masterpost Highlight Romantic Quote',
          type: 'textarea',
          placeholder: 'e.g. “made this whole page because you somehow made my whole world so much softer.”',
          defaultValue: '“made this whole page because you somehow made my whole world so much softer.”',
          required: true,
          helpText: 'Kutipan romantis utama di dalam box masterpost.'
        },
        {
          id: 'entry_photo_caption',
          label: 'Photo 01 Caption (Entry Photo)',
          type: 'text',
          placeholder: 'e.g. the face that started it all, still my favorite view',
          defaultValue: 'the face that started it all, still my favorite view',
          required: true
        },
        {
          id: 'entry_photo_meta',
          label: 'Photo 01 Meta Chip Tag',
          type: 'text',
          placeholder: 'e.g. MASTERPOST ARCHIVE',
          defaultValue: 'MASTERPOST ARCHIVE',
          required: true
        },
        {
          id: 'entry_btn_text',
          label: 'Open Archive Button Label',
          type: 'text',
          placeholder: 'e.g. read full masterpost (4 items)',
          defaultValue: 'read full masterpost (4 items)',
          required: true
        },
        {
          id: 'entry_tags',
          label: 'Post 01 Tumblr Tags',
          type: 'text',
          placeholder: 'e.g. #keisha!, #favorites, #3 months mensive, #archive, #only you',
          defaultValue: '#keisha!, #favorites, #3 months mensive, #archive, #only you',
          required: true
        },
        {
          id: 'entry_notes_count',
          label: 'Post 01 Notes Count',
          type: 'text',
          placeholder: 'e.g. 3,206 notes',
          defaultValue: '3,206 notes',
          required: true
        },
        {
          id: 'entry_comment_1',
          label: 'Notes Drawer: Comment 01 (Dari Pasangan)',
          type: 'text',
          placeholder: 'e.g. wait you really made a whole tumblr for me?',
          defaultValue: 'wait you really made a whole tumblr for me?',
          required: true
        },
        {
          id: 'entry_reply_1',
          label: 'Notes Drawer: Reply 01 (Balasan Pengirim)',
          type: 'text',
          placeholder: 'e.g. obviously, had to make sure you know you're my favorite.',
          defaultValue: 'obviously, had to make sure you know you're my favorite.',
          required: true
        },
        {
          id: 'entry_comment_2',
          label: 'Notes Drawer: Comment 02 (Reaksi Pasangan)',
          type: 'text',
          placeholder: 'e.g. you're actually the sweetest, stop',
          defaultValue: 'you're actually the sweetest, stop',
          required: true
        }
      ]
    },
    {
      id: 'post_02_favorites_list',
      number: '04',
      title: 'Post 02 — The Favorites List (4 Evidence Items)',
      description: '4 tap-to-reveal evidence list items, photo caption, tags, and comment drawer.',
      fields: [
        {
          id: 'list_title',
          label: 'Post 02 Heading',
          type: 'text',
          placeholder: 'e.g. FAVORITES',
          defaultValue: 'FAVORITES',
          required: true
        },
        {
          id: 'list_sublabel',
          label: 'Post 02 Sublabel',
          type: 'text',
          placeholder: 'e.g. the person behind every single good thing lately',
          defaultValue: 'the person behind every single good thing lately',
          required: true
        },
        {
          id: 'item_1_prompt',
          label: 'Evidence 01: Prompt',
          type: 'text',
          placeholder: 'e.g. person i text the second i wake up',
          defaultValue: 'person i text the second i wake up',
          required: true
        },
        {
          id: 'item_1_reveal',
          label: 'Evidence 01: Reveal Text',
          type: 'text',
          placeholder: 'e.g. you, obviously.',
          defaultValue: 'you, obviously.',
          required: true
        },
        {
          id: 'item_2_prompt',
          label: 'Evidence 02: Prompt',
          type: 'text',
          placeholder: 'e.g. person whose food i let steal mine',
          defaultValue: 'person whose food i let steal mine',
          required: true
        },
        {
          id: 'item_2_reveal',
          label: 'Evidence 02: Reveal Text',
          type: 'text',
          placeholder: 'e.g. still you.',
          defaultValue: 'still you.',
          required: true
        },
        {
          id: 'item_3_prompt',
          label: 'Evidence 03: Prompt',
          type: 'text',
          placeholder: 'e.g. person i miss even when you just left',
          defaultValue: 'person i miss even when you just left',
          required: true
        },
        {
          id: 'item_3_reveal',
          label: 'Evidence 03: Reveal Text',
          type: 'text',
          placeholder: 'e.g. you already knew that.',
          defaultValue: 'you already knew that.',
          required: true
        },
        {
          id: 'item_4_prompt',
          label: 'Evidence 04: Prompt',
          type: 'text',
          placeholder: 'e.g. person i'd choose over and over again',
          defaultValue: 'person i'd choose over and over again',
          required: true
        },
        {
          id: 'item_4_reveal',
          label: 'Evidence 04: Reveal Text',
          type: 'text',
          placeholder: 'e.g. keisha!!!',
          defaultValue: 'keisha!!!',
          required: true
        },
        {
          id: 'list_photo_caption',
          label: 'Photo 02 Caption (Evidence Photo)',
          type: 'text',
          placeholder: 'e.g. eating pizza and looking this cute should actually be illegal',
          defaultValue: 'eating pizza and looking this cute should actually be illegal',
          required: true
        },
        {
          id: 'list_photo_meta',
          label: 'Photo 02 Meta Chip Tag',
          type: 'text',
          placeholder: 'e.g. CAUGHT ON CAMERA',
          defaultValue: 'CAUGHT ON CAMERA',
          required: true
        },
        {
          id: 'list_btn_locked',
          label: 'Button Label (Sebelum Terbuka Semua)',
          type: 'text',
          placeholder: 'e.g. unlock all 4 evidence items',
          defaultValue: 'unlock all 4 evidence items',
          required: true
        },
        {
          id: 'list_btn_ready',
          label: 'Button Label (Setelah Terbuka Semua)',
          type: 'text',
          placeholder: 'e.g. you see the pattern now →',
          defaultValue: 'you see the pattern now →',
          required: true
        },
        {
          id: 'list_tags',
          label: 'Post 02 Tumblr Tags',
          type: 'text',
          placeholder: 'e.g. #text post, #confessions, #keisha!!, #evidence',
          defaultValue: '#text post, #confessions, #keisha!!, #evidence',
          required: true
        },
        {
          id: 'list_notes_count',
          label: 'Post 02 Notes Count',
          type: 'text',
          placeholder: 'e.g. 4,891 notes',
          defaultValue: '4,891 notes',
          required: true
        },
        {
          id: 'list_comment',
          label: 'Post 02 Notes: Comment Pasangan',
          type: 'text',
          placeholder: 'e.g. the evidence is undeniable tbh',
          defaultValue: 'the evidence is undeniable tbh',
          required: true
        },
        {
          id: 'list_reply',
          label: 'Post 02 Notes: Reply Pengirim',
          type: 'text',
          placeholder: 'e.g. case closed, you have no defense.',
          defaultValue: 'case closed, you have no defense.',
          required: true
        }
      ]
    },
    {
      id: 'post_03_tumblr_poll',
      number: '05',
      title: 'Post 03 — Tumblr Poll & Winner Photo (#scene-quiz)',
      description: 'Interactive 3-option Tumblr poll, vote percentages, winner portrait, tags, and comment drawer.',
      fields: [
        {
          id: 'quiz_eyebrow',
          label: 'Poll Post Eyebrow',
          type: 'text',
          placeholder: 'e.g. ONE QUICK QUESTION',
          defaultValue: 'ONE QUICK QUESTION',
          required: true
        },
        {
          id: 'quiz_question',
          label: 'Poll Question',
          type: 'text',
          placeholder: 'e.g. who is literally all i think about lately?',
          defaultValue: 'who is literally all i think about lately?',
          required: true
        },
        {
          id: 'quiz_opt_1_label',
          label: 'Option 01 Label (Jawaban Utama)',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true
        },
        {
          id: 'quiz_opt_1_pct',
          label: 'Option 01 Percentage',
          type: 'text',
          placeholder: 'e.g. 98.4%',
          defaultValue: '98.4%',
          required: true
        },
        {
          id: 'quiz_opt_1_resp',
          label: 'Option 01 Instant Response Note',
          type: 'text',
          placeholder: 'e.g. obviously.',
          defaultValue: 'obviously.',
          required: true
        },
        {
          id: 'quiz_opt_2_label',
          label: 'Option 02 Label',
          type: 'text',
          placeholder: 'e.g. someone else',
          defaultValue: 'someone else',
          required: true
        },
        {
          id: 'quiz_opt_2_pct',
          label: 'Option 02 Percentage',
          type: 'text',
          placeholder: 'e.g. 0.8%',
          defaultValue: '0.8%',
          required: true
        },
        {
          id: 'quiz_opt_2_resp',
          label: 'Option 02 Instant Response Note',
          type: 'text',
          placeholder: 'e.g. be serious right now.',
          defaultValue: 'be serious right now.',
          required: true
        },
        {
          id: 'quiz_opt_3_label',
          label: 'Option 03 Label',
          type: 'text',
          placeholder: 'e.g. no idea tell me',
          defaultValue: 'no idea tell me',
          required: true
        },
        {
          id: 'quiz_opt_3_pct',
          label: 'Option 03 Percentage',
          type: 'text',
          placeholder: 'e.g. 0.8%',
          defaultValue: '0.8%',
          required: true
        },
        {
          id: 'quiz_opt_3_resp',
          label: 'Option 03 Instant Response Note',
          type: 'text',
          placeholder: 'e.g. as if you don't already know.',
          defaultValue: 'as if you don't already know.',
          required: true
        },
        {
          id: 'quiz_res_title',
          label: 'Poll Winner Reveal Title',
          type: 'text',
          placeholder: 'e.g. it's keisha!',
          defaultValue: 'it's keisha!',
          required: true
        },
        {
          id: 'quiz_res_sub',
          label: 'Poll Winner Reveal Subtitle',
          type: 'text',
          placeholder: 'e.g. as if it could ever be anyone else.',
          defaultValue: 'as if it could ever be anyone else.',
          required: true
        },
        {
          id: 'quiz_photo_caption',
          label: 'Photo 03 Caption (Poll Winner Photo)',
          type: 'text',
          placeholder: 'e.g. the prettiest girl in my camera roll, no competition',
          defaultValue: 'the prettiest girl in my camera roll, no competition',
          required: true
        },
        {
          id: 'quiz_photo_meta',
          label: 'Photo 03 Meta Chip Tag',
          type: 'text',
          placeholder: 'e.g. saved by @keonho',
          defaultValue: 'saved by @keonho',
          required: true
        },
        {
          id: 'quiz_btn_text',
          label: 'Next Post Button Label',
          type: 'text',
          placeholder: 'e.g. keep reading the feed',
          defaultValue: 'keep reading the feed',
          required: true
        },
        {
          id: 'quiz_tags',
          label: 'Post 03 Tumblr Tags',
          type: 'text',
          placeholder: 'e.g. #tumblr poll, #favorite person, #saved by @keonho, #photopost',
          defaultValue: '#tumblr poll, #favorite person, #saved by @keonho, #photopost',
          required: true
        },
        {
          id: 'quiz_notes_count',
          label: 'Post 03 Notes Count',
          type: 'text',
          placeholder: 'e.g. 12,402 notes',
          defaultValue: '12,402 notes',
          required: true
        },
        {
          id: 'quiz_comment',
          label: 'Post 03 Notes: Comment Pasangan',
          type: 'text',
          placeholder: 'e.g. who voted someone else i just wanna talk',
          defaultValue: 'who voted someone else i just wanna talk',
          required: true
        },
        {
          id: 'quiz_reply',
          label: 'Post 03 Notes: Reply Pengirim',
          type: 'text',
          placeholder: 'e.g. 100% rigged in your favor obviously',
          defaultValue: '100% rigged in your favor obviously',
          required: true
        }
      ]
    },
    {
      id: 'post_04_milestone_counter',
      number: '06',
      title: 'Post 04 — Milestone Stepper Timeline (#scene-counter)',
      description: '3-step timeline milestones, celebration card, photo, tags, and comment drawer.',
      fields: [
        {
          id: 'counter_eyebrow',
          label: 'Timeline Heading',
          type: 'text',
          placeholder: 'e.g. HOW LONG HAVE WE BEEN US?',
          defaultValue: 'HOW LONG HAVE WE BEEN US?',
          required: true
        },
        {
          id: 'step_1_num',
          label: 'Step 01 Number Display',
          type: 'text',
          placeholder: 'e.g. 01',
          defaultValue: '01',
          required: true
        },
        {
          id: 'step_1_story',
          label: 'Step 01 Milestone Story',
          type: 'textarea',
          placeholder: 'e.g. the day everything started making sense.',
          defaultValue: 'the day everything started making sense.',
          required: true
        },
        {
          id: 'step_2_num',
          label: 'Step 02 Number Display',
          type: 'text',
          placeholder: 'e.g. 02',
          defaultValue: '02',
          required: true
        },
        {
          id: 'step_2_story',
          label: 'Step 02 Milestone Story',
          type: 'textarea',
          placeholder: 'e.g. falling for you a little more every day.',
          defaultValue: 'falling for you a little more every day.',
          required: true
        },
        {
          id: 'step_3_num',
          label: 'Step 03 Number Display',
          type: 'text',
          placeholder: 'e.g. 03',
          defaultValue: '03',
          required: true
        },
        {
          id: 'step_3_story',
          label: 'Step 03 Milestone Story',
          type: 'textarea',
          placeholder: 'e.g. still us, and you still light up every room you're in.',
          defaultValue: 'still us, and you still light up every room you're in.',
          required: true
        },
        {
          id: 'milestone_badge',
          label: 'Milestone Celebration Card Badge',
          type: 'text',
          placeholder: 'e.g. 03 MONTHS WITH YOU',
          defaultValue: '03 MONTHS WITH YOU',
          required: true
        },
        {
          id: 'milestone_date',
          label: 'Milestone Date Formatted',
          type: 'text',
          placeholder: 'e.g. SEPTEMBER 01, 2026',
          defaultValue: 'SEPTEMBER 01, 2026',
          required: true
        },
        {
          id: 'milestone_callout',
          label: 'Milestone Callout Text',
          type: 'text',
          placeholder: 'e.g. that's today.',
          defaultValue: 'that's today.',
          required: true
        },
        {
          id: 'milestone_sub',
          label: 'Milestone Subtitle Note',
          type: 'textarea',
          placeholder: 'e.g. and you're still the best thing that's ever happened to me.',
          defaultValue: 'and you're still the best thing that's ever happened to me.',
          required: true
        },
        {
          id: 'counter_photo_caption',
          label: 'Photo 04 Caption (Milestone Photo)',
          type: 'text',
          placeholder: 'e.g. three months of late night dates and i still get butterflies',
          defaultValue: 'three months of late night dates and i still get butterflies',
          required: true
        },
        {
          id: 'counter_photo_meta',
          label: 'Photo 04 Meta Chip Tag',
          type: 'text',
          placeholder: 'e.g. 3RD MONTH MILESTONE, SAVED BY KEONHO',
          defaultValue: '3RD MONTH MILESTONE, SAVED BY KEONHO',
          required: true
        },
        {
          id: 'counter_status_text',
          label: 'Status Completed Text',
          type: 'text',
          placeholder: 'e.g. 03 of 03 complete.',
          defaultValue: '03 of 03 complete.',
          required: true
        },
        {
          id: 'counter_btn_text',
          label: 'Advance Button Label',
          type: 'text',
          placeholder: 'e.g. one last thing for you',
          defaultValue: 'one last thing for you',
          required: true
        },
        {
          id: 'counter_tags',
          label: 'Post 04 Tumblr Tags',
          type: 'text',
          placeholder: 'e.g. #3 months, #milestone, #still us, #my favorite',
          defaultValue: '#3 months, #milestone, #still us, #my favorite',
          required: true
        },
        {
          id: 'counter_notes_count',
          label: 'Post 04 Notes Count',
          type: 'text',
          placeholder: 'e.g. 28,910 notes',
          defaultValue: '28,910 notes',
          required: true
        },
        {
          id: 'counter_comment',
          label: 'Post 04 Notes: Comment Pasangan',
          type: 'text',
          placeholder: 'e.g. 3 months went by way too fast',
          defaultValue: '3 months went by way too fast',
          required: true
        },
        {
          id: 'counter_reply',
          label: 'Post 04 Notes: Reply Pengirim',
          type: 'text',
          placeholder: 'e.g. just getting started with you, promise.',
          defaultValue: 'just getting started with you, promise.',
          required: true
        }
      ]
    },
    {
      id: 'post_05_final_confession',
      number: '07',
      title: 'Post 05 — Final Love Note & Verified Truth (#scene-final)',
      description: 'Closing confession, verified truth answer, 3 love letter lines, hug photo, tags, and final comment.',
      fields: [
        {
          id: 'final_eyebrow',
          label: 'Final Post Eyebrow',
          type: 'text',
          placeholder: 'e.g. ONE LAST THING',
          defaultValue: 'ONE LAST THING',
          required: true
        },
        {
          id: 'final_intro',
          label: 'Intro Greeting',
          type: 'text',
          placeholder: 'e.g. so, keisha!...',
          defaultValue: 'so, keisha!...',
          required: true
        },
        {
          id: 'final_question',
          label: 'Final Question Heading',
          type: 'text',
          placeholder: 'e.g. who's the only one keith will ever want?',
          defaultValue: 'who's the only one keith will ever want?',
          required: true
        },
        {
          id: 'verified_badge',
          label: 'Verified Badge Label',
          type: 'text',
          placeholder: 'e.g. VERIFIED TRUTH',
          defaultValue: 'VERIFIED TRUTH',
          required: true
        },
        {
          id: 'verified_answer',
          label: 'Verified Target Answer',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true
        },
        {
          id: 'verified_sub',
          label: 'Verified Subtitle Tagline',
          type: 'text',
          placeholder: 'e.g. always was, always will be.',
          defaultValue: 'always was, always will be.',
          required: true
        },
        {
          id: 'final_line_1',
          label: 'Letter Line / Paragraph 01',
          type: 'textarea',
          placeholder: 'e.g. happy 3 months, keisha!',
          defaultValue: 'happy 3 months, keisha!',
          required: true
        },
        {
          id: 'final_line_2',
          label: 'Letter Line / Paragraph 02',
          type: 'textarea',
          placeholder: 'e.g. you're my favorite person in the entire world, hands down.',
          defaultValue: 'you're my favorite person in the entire world, hands down.',
          required: true
        },
        {
          id: 'final_signoff',
          label: 'Letter Sign-off (Nama Pengirim)',
          type: 'text',
          placeholder: 'e.g. Keith.',
          defaultValue: 'Keith.',
          required: true
        },
        {
          id: 'final_photo_caption',
          label: 'Photo 05 Caption (Final Hug Photo)',
          type: 'text',
          placeholder: 'e.g. always running straight into my arms, forever my favorite person',
          defaultValue: 'always running straight into my arms, forever my favorite person',
          required: true
        },
        {
          id: 'footer_date_text',
          label: 'Footer Date / Signature Text',
          type: 'text',
          placeholder: 'e.g. keith's favorites',
          defaultValue: 'keith's favorites',
          required: true
        },
        {
          id: 'footer_status',
          label: 'Footer Status Text',
          type: 'text',
          placeholder: 'e.g. end of list',
          defaultValue: 'end of list',
          required: true
        },
        {
          id: 'final_tags',
          label: 'Post 05 Tumblr Tags',
          type: 'text',
          placeholder: 'e.g. #happy 3 months, #keisha!, #still my favorite, #forever and ever, #end of list',
          defaultValue: '#happy 3 months, #keisha!, #still my favorite, #forever and ever, #end of list',
          required: true
        },
        {
          id: 'final_notes_count',
          label: 'Post 05 Notes Count',
          type: 'text',
          placeholder: 'e.g. 100,000 notes',
          defaultValue: '100,000 notes',
          required: true
        },
        {
          id: 'final_comment',
          label: 'Post 05 Notes: Final Comment Pasangan',
          type: 'text',
          placeholder: 'e.g. happy 3 months keith',
          defaultValue: 'happy 3 months keith',
          required: true
        },
        {
          id: 'final_reply',
          label: 'Post 05 Notes: Final Reply Pengirim',
          type: 'text',
          placeholder: 'e.g. always my favorite. happy 3 months keisha.',
          defaultValue: 'always my favorite. happy 3 months keisha.',
          required: true
        }
      ]
    }
  ]
};
