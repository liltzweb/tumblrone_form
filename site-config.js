window.FORM_CONFIG = {
  product: {
    code: 'tumblrone',
    name: 'tumblrone',
    badge: 'interactive tumblr dashboard feed',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    tagline: 'interactive midnight-blue tumblr dashboard feed with 5 posts, tap-to-reveal favorites, interactive poll, milestone stepper, and final love confession.'
  },
  context: {
    formCode: 'TMBLR-ORD',
    edition: '2026 Tumblr Dashboard Edition',
    description: 'Tumblrone is a modern midnight-blue Tumblr feed gift website featuring 5 interactive dashboard posts: Cover Masterpost, Tap-to-Reveal Favorites List (4 items), Interactive Tumblr Poll with portrait reveal, 3-step Milestone Timeline Stepper with celebration card, and Final Love Note & Verified Truth confession, complete with interactive sound synthesis and notes drawer.'
  },
  motif: '🎟️',
  mediaDescription: '7 Foto (2 Avatar Profil + 5 Foto Post Feed Tumblr)',
  theme: {
    name: 'tumblrone',
    palette: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD', '#38B2AC']
  },
  sections: [
    {
      id: 'tumblr_profiles',
      number: '02',
      title: 'Tumblr Profiles & Dashboard Identity',
      description: 'Tumblr user handles, avatars, search bar tag, and milestone counter.',
      fields: [
        {
          id: 'sender_name',
          label: 'Sender Display Name',
          type: 'text',
          placeholder: 'e.g. Keith.',
          defaultValue: 'Keith.',
          required: true,
          helpText: 'Display name of the sender/creator.'
        },
        {
          id: 'sender_handle',
          label: 'Sender Handle / Username',
          type: 'text',
          placeholder: 'e.g. @keonho',
          defaultValue: '@keonho',
          required: true,
          helpText: 'Tumblr username for the sender.'
        },
        {
          id: 'recipient_name',
          label: 'Recipient Display Name',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true,
          helpText: 'Display name of the recipient/partner.'
        },
        {
          id: 'recipient_handle',
          label: 'Recipient Handle / Username',
          type: 'text',
          placeholder: 'e.g. @kya',
          defaultValue: '@kya',
          required: true,
          helpText: 'Tumblr username for the recipient.'
        },
        {
          id: 'search_tag',
          label: 'Top Search Bar Tags',
          type: 'text',
          placeholder: 'e.g. Search #keisha! #favorites',
          defaultValue: 'Search #keisha! #favorites',
          required: true,
          helpText: 'Text shown inside the Tumblr top navigation search bar.'
        },
        {
          id: 'date_formatted',
          label: 'Main Date Formatted',
          type: 'text',
          placeholder: 'e.g. September 1, 2026',
          defaultValue: 'September 1, 2026',
          required: true,
          helpText: 'Date string displayed across posts.'
        },
        {
          id: 'date_code',
          label: 'Short Date Code',
          type: 'text',
          placeholder: 'e.g. 01 / 09 / 26',
          defaultValue: '01 / 09 / 26',
          required: true,
          helpText: 'Short numerical date format.'
        },
        {
          id: 'months_count',
          label: 'Milestone Duration / Months Count',
          type: 'text',
          placeholder: 'e.g. 3 (or 1st Anniversary, 100 Days, etc.)',
          defaultValue: '3',
          required: true,
          helpText: 'Number of months or milestone label.'
        }
      ]
    },
    {
      id: 'post_01_entry',
      number: '03',
      title: 'Post 01 — Cover Masterpost (Entry)',
      description: 'Opening masterpost with golden hour photo and invitation into the archive.',
      fields: [
        {
          id: 'entry_badge',
          label: 'Post Badge',
          type: 'text',
          placeholder: 'e.g. private archive, for your eyes only',
          defaultValue: 'private archive, for your eyes only',
          required: true,
          helpText: 'Top badge on post 01.'
        },
        {
          id: 'entry_title',
          label: 'Masterpost Title',
          type: 'text',
          placeholder: 'e.g. KEITH'S FAVORITES',
          defaultValue: 'KEITH'S FAVORITES',
          required: true,
          helpText: 'Large heading for the masterpost.'
        },
        {
          id: 'entry_subtitle',
          label: 'Masterpost Subtitle / Quote',
          type: 'textarea',
          placeholder: 'e.g. a ridiculously biased list.',
          defaultValue: 'a ridiculously biased list.',
          required: true,
          helpText: 'Subheading or romantic quote beneath title.'
        },
        {
          id: 'entry_photo_caption',
          label: 'Photo 01 Caption (Entry Photo)',
          type: 'text',
          placeholder: 'e.g. the face that started it all, still my favorite view',
          defaultValue: 'the face that started it all, still my favorite view',
          required: true,
          helpText: 'Caption below the entry cover photo.'
        },
        {
          id: 'entry_photo_meta',
          label: 'Photo 01 Meta Tag',
          type: 'text',
          placeholder: 'e.g. SAVED ARCHIVE',
          defaultValue: 'SAVED ARCHIVE',
          required: true,
          helpText: 'Small tag chip on photo 01.'
        },
        {
          id: 'entry_button_text',
          label: 'Open Button Text',
          type: 'text',
          placeholder: 'e.g. open the archive (4 items)',
          defaultValue: 'open the archive (4 items)',
          required: true,
          helpText: 'Button to advance to post 02.'
        }
      ]
    },
    {
      id: 'post_02_list',
      number: '04',
      title: 'Post 02 — The Favorites List (4 Tap-to-Reveal Items)',
      description: 'Interactive list where tapping each item reveals a sweet secret confession.',
      fields: [
        {
          id: 'list_title',
          label: 'List Post Title',
          type: 'text',
          placeholder: 'e.g. THE LIST',
          defaultValue: 'THE LIST',
          required: true
        },
        {
          id: 'list_sublabel',
          label: 'List Post Sublabel',
          type: 'text',
          placeholder: 'e.g. the person behind every single good thing lately',
          defaultValue: 'the person behind every single good thing lately',
          required: true
        },
        {
          id: 'item_1_prompt',
          label: 'Item 01 Prompt',
          type: 'text',
          placeholder: 'e.g. person i text the second i wake up',
          defaultValue: 'person i text the second i wake up',
          required: true
        },
        {
          id: 'item_1_reveal',
          label: 'Item 01 Reveal Text',
          type: 'text',
          placeholder: 'e.g. you, obviously.',
          defaultValue: 'you, obviously.',
          required: true
        },
        {
          id: 'item_2_prompt',
          label: 'Item 02 Prompt',
          type: 'text',
          placeholder: 'e.g. person whose food i let steal mine',
          defaultValue: 'person whose food i let steal mine',
          required: true
        },
        {
          id: 'item_2_reveal',
          label: 'Item 02 Reveal Text',
          type: 'text',
          placeholder: 'e.g. still you.',
          defaultValue: 'still you.',
          required: true
        },
        {
          id: 'item_3_prompt',
          label: 'Item 03 Prompt',
          type: 'text',
          placeholder: 'e.g. person who makes my whole day better with one call',
          defaultValue: 'person who makes my whole day better with one call',
          required: true
        },
        {
          id: 'item_3_reveal',
          label: 'Item 03 Reveal Text',
          type: 'text',
          placeholder: 'e.g. always you.',
          defaultValue: 'always you.',
          required: true
        },
        {
          id: 'item_4_prompt',
          label: 'Item 04 Prompt',
          type: 'text',
          placeholder: 'e.g. person i'd choose over and over again',
          defaultValue: 'person i'd choose over and over again',
          required: true
        },
        {
          id: 'item_4_reveal',
          label: 'Item 04 Reveal Text',
          type: 'text',
          placeholder: 'e.g. keisha!!!',
          defaultValue: 'keisha!!!',
          required: true
        },
        {
          id: 'list_photo_caption',
          label: 'Photo 02 Caption (List Photo)',
          type: 'text',
          placeholder: 'e.g. caught you looking pretty without even trying',
          defaultValue: 'caught you looking pretty without even trying',
          required: true
        },
        {
          id: 'list_photo_meta',
          label: 'Photo 02 Meta Tag',
          type: 'text',
          placeholder: 'e.g. EVIDENCE 04 OF 04',
          defaultValue: 'EVIDENCE 04 OF 04',
          required: true
        },
        {
          id: 'list_button_text',
          label: 'Continue Button Text',
          type: 'text',
          placeholder: 'e.g. continue to post 03',
          defaultValue: 'continue to post 03',
          required: true
        }
      ]
    },
    {
      id: 'post_03_poll',
      number: '05',
      title: 'Post 03 — Tumblr Poll & Winner Reveal',
      description: 'Interactive Tumblr poll with vote percentages and winning portrait reveal.',
      fields: [
        {
          id: 'poll_eyebrow',
          label: 'Poll Post Eyebrow',
          type: 'text',
          placeholder: 'e.g. QUICK QUESTION',
          defaultValue: 'QUICK QUESTION',
          required: true
        },
        {
          id: 'poll_question',
          label: 'Poll Question',
          type: 'text',
          placeholder: 'e.g. who is literally all i think about lately?',
          defaultValue: 'who is literally all i think about lately?',
          required: true
        },
        {
          id: 'poll_hint',
          label: 'Poll Subtitle / Hint',
          type: 'text',
          placeholder: 'e.g. as if it could ever be anyone else.',
          defaultValue: 'as if it could ever be anyone else.',
          required: true
        },
        {
          id: 'poll_option_1',
          label: 'Poll Option A Text',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true
        },
        {
          id: 'poll_votes_1',
          label: 'Poll Option A Percentage',
          type: 'text',
          placeholder: 'e.g. 98.4%',
          defaultValue: '98.4%',
          required: true
        },
        {
          id: 'poll_option_2',
          label: 'Poll Option B Text',
          type: 'text',
          placeholder: 'e.g. still keisha! (there's literally no other option)',
          defaultValue: 'still keisha! (there's literally no other option)',
          required: true
        },
        {
          id: 'poll_votes_2',
          label: 'Poll Option B Percentage',
          type: 'text',
          placeholder: 'e.g. 1.6%',
          defaultValue: '1.6%',
          required: true
        },
        {
          id: 'poll_result_title',
          label: 'Poll Result Heading',
          type: 'text',
          placeholder: 'e.g. 100% of votes agree.',
          defaultValue: '100% of votes agree.',
          required: true
        },
        {
          id: 'poll_result_subtitle',
          label: 'Poll Result Subtitle',
          type: 'text',
          placeholder: 'e.g. a ridiculously biased survey result.',
          defaultValue: 'a ridiculously biased survey result.',
          required: true
        },
        {
          id: 'poll_photo_caption',
          label: 'Photo 03 Caption (Poll Winner Photo)',
          type: 'text',
          placeholder: 'e.g. my favorite notification, favorite laugh, favorite everything',
          defaultValue: 'my favorite notification, favorite laugh, favorite everything',
          required: true
        },
        {
          id: 'poll_photo_meta',
          label: 'Photo 03 Meta Tag',
          type: 'text',
          placeholder: 'e.g. WINNER OF THE POLL',
          defaultValue: 'WINNER OF THE POLL',
          required: true
        },
        {
          id: 'poll_button_text',
          label: 'Next Button Text',
          type: 'text',
          placeholder: 'e.g. next post (04 of 05)',
          defaultValue: 'next post (04 of 05)',
          required: true
        }
      ]
    },
    {
      id: 'post_04_timeline',
      number: '06',
      title: 'Post 04 — Milestone Stepper (3 Months Timeline)',
      description: 'Interactive timeline stepper revealing key relationship milestones and celebration card.',
      fields: [
        {
          id: 'timeline_eyebrow',
          label: 'Timeline Eyebrow',
          type: 'text',
          placeholder: 'e.g. MILESTONE TRACKER',
          defaultValue: 'MILESTONE TRACKER',
          required: true
        },
        {
          id: 'timeline_title',
          label: 'Timeline Heading',
          type: 'text',
          placeholder: 'e.g. HOW LONG HAVE WE BEEN US?',
          defaultValue: 'HOW LONG HAVE WE BEEN US?',
          required: true
        },
        {
          id: 'step_1_title',
          label: 'Step 01 Milestone Title',
          type: 'text',
          placeholder: 'e.g. MONTH 01',
          defaultValue: 'MONTH 01',
          required: true
        },
        {
          id: 'step_1_date',
          label: 'Step 01 Date',
          type: 'text',
          placeholder: 'e.g. june 01',
          defaultValue: 'june 01',
          required: true
        },
        {
          id: 'step_1_text',
          label: 'Step 01 Memory Story',
          type: 'textarea',
          placeholder: 'e.g. where it all started.',
          defaultValue: 'where it all started.',
          required: true
        },
        {
          id: 'step_2_title',
          label: 'Step 02 Milestone Title',
          type: 'text',
          placeholder: 'e.g. MONTH 02',
          defaultValue: 'MONTH 02',
          required: true
        },
        {
          id: 'step_2_date',
          label: 'Step 02 Date',
          type: 'text',
          placeholder: 'e.g. july 01',
          defaultValue: 'july 01',
          required: true
        },
        {
          id: 'step_2_text',
          label: 'Step 02 Memory Story',
          type: 'textarea',
          placeholder: 'e.g. falling harder every single day.',
          defaultValue: 'falling harder every single day.',
          required: true
        },
        {
          id: 'step_3_title',
          label: 'Step 03 Milestone Title',
          type: 'text',
          placeholder: 'e.g. MONTH 03',
          defaultValue: 'MONTH 03',
          required: true
        },
        {
          id: 'step_3_date',
          label: 'Step 03 Date',
          type: 'text',
          placeholder: 'e.g. august 01',
          defaultValue: 'august 01',
          required: true
        },
        {
          id: 'step_3_text',
          label: 'Step 03 Memory Story',
          type: 'textarea',
          placeholder: 'e.g. officially three months in.',
          defaultValue: 'officially three months in.',
          required: true
        },
        {
          id: 'milestone_badge',
          label: 'Celebration Card Badge',
          type: 'text',
          placeholder: 'e.g. 03 MONTHS WITH YOU',
          defaultValue: '03 MONTHS WITH YOU',
          required: true
        },
        {
          id: 'milestone_callout',
          label: 'Celebration Callout',
          type: 'text',
          placeholder: 'e.g. that's today.',
          defaultValue: 'that's today.',
          required: true
        },
        {
          id: 'milestone_sub',
          label: 'Celebration Note',
          type: 'textarea',
          placeholder: 'e.g. and you're still the best thing that's ever happened to me.',
          defaultValue: 'and you're still the best thing that's ever happened to me.',
          required: true
        },
        {
          id: 'timeline_photo_caption',
          label: 'Photo 04 Caption (Milestone Photo)',
          type: 'text',
          placeholder: 'e.g. three months of late night dates and i still get butterflies',
          defaultValue: 'three months of late night dates and i still get butterflies',
          required: true
        },
        {
          id: 'timeline_photo_meta',
          label: 'Photo 04 Meta Tag',
          type: 'text',
          placeholder: 'e.g. 3RD MONTH MILESTONE',
          defaultValue: '3RD MONTH MILESTONE',
          required: true
        },
        {
          id: 'timeline_button_text',
          label: 'Next Button Text',
          type: 'text',
          placeholder: 'e.g. one last thing for you',
          defaultValue: 'one last thing for you',
          required: true
        }
      ]
    },
    {
      id: 'post_05_final',
      number: '07',
      title: 'Post 05 — Final Love Note & Verified Truth Confession',
      description: 'Closing confession with verified badge, final portrait, and heartfelt sign-off.',
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
          label: 'Verified Answer Text',
          type: 'text',
          placeholder: 'e.g. keisha!',
          defaultValue: 'keisha!',
          required: true
        },
        {
          id: 'verified_sub',
          label: 'Verified Subtitle',
          type: 'text',
          placeholder: 'e.g. always was, always will be.',
          defaultValue: 'always was, always will be.',
          required: true
        },
        {
          id: 'letter_line_1',
          label: 'Letter Paragraph 01',
          type: 'textarea',
          placeholder: 'e.g. happy 3 months, keisha!',
          defaultValue: 'happy 3 months, keisha!',
          required: true
        },
        {
          id: 'letter_line_2',
          label: 'Letter Paragraph 02',
          type: 'textarea',
          placeholder: 'e.g. you're my favorite person in the entire world, hands down.',
          defaultValue: 'you're my favorite person in the entire world, hands down.',
          required: true
        },
        {
          id: 'letter_signoff',
          label: 'Letter Sign-off / Sender Name',
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
          id: 'footer_status',
          label: 'Bottom End Tag',
          type: 'text',
          placeholder: 'e.g. end of list',
          defaultValue: 'end of list',
          required: true
        }
      ]
    }
  ]
};
