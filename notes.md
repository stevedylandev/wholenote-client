
curl --request GET \
     --url 'https://api.neynar.com/v2/farcaster/feed?feed_type=filter&filter_type=embed_url&embed_url=open.spotify.com&with_recasts=true&limit=25' \
     --header 'accept: application/json' \
     --header 'x-api-key: NEYNAR_API_DOCS' \
     --header 'x-neynar-experimental: false'

{
  "casts": [
    {
      "object": "cast",
      "hash": "0x8d4550227be1b662ff5375bd8dd43d9c5d377d5a",
      "author": {
        "object": "user",
        "fid": 317501,
        "username": "rosstintexas",
        "display_name": "rosstintexas 🎩",
        "pfp_url": "https://i.imgur.com/GfcPw6V.gif",
        "custody_address": "0x0235e02bc7b034f2d4db2b5f79f9a599da9dc689",
        "profile": {
          "bio": {
            "text": "Photographer based in New Mexico. \n🩺📸🏳️‍🌈🐕🏕️\nlinktr.ee/rosstintexas\n\nhttps://rainbow.me/profile/rosstintexas.degen.eth"
          }
        },
        "follower_count": 1606,
        "following_count": 941,
        "verifications": [
          "0xdd4247922463b8db50a8ae53f3f6090e044fcbb9",
          "0x1847a58d11903ecd73ee8bf71ad801d7ed82ca97"
        ],
        "verified_addresses": {
          "eth_addresses": [
            "0xdd4247922463b8db50a8ae53f3f6090e044fcbb9",
            "0x1847a58d11903ecd73ee8bf71ad801d7ed82ca97"
          ],
          "sol_addresses": [],
          "primary": {
            "eth_address": "0xdd4247922463b8db50a8ae53f3f6090e044fcbb9",
            "sol_address": null
          }
        },
        "verified_accounts": [
          {
            "platform": "x",
            "username": "rosstintexas"
          }
        ],
        "power_badge": false
      },
      "app": {
        "object": "user_dehydrated",
        "fid": 9152,
        "username": "warpcast",
        "display_name": "Warpcast",
        "pfp_url": "https://i.imgur.com/3d6fFAI.png",
        "custody_address": "0x02ef790dd7993a35fd847c053eddae940d055596"
      },
      "thread_hash": "0x368ab3bc96c0cbb404700c5ddce7e5842c4ec78e",
      "parent_hash": "0x739cbaab01d1805d0042d08466830de6f6e810ca",
      "parent_url": null,
      "root_parent_url": "chain://eip155:7777777/erc721:0xf6a7d848603aff875e4f35025e5c568679ccc17c",
      "parent_author": {
        "fid": 285998
      },
      "text": "Some times it nows in April\n\nhttps://open.spotify.com/track/1Az0fhiWi0EVS4cZ3FF20X?si=IzpYnkWORqCKVdmm0bZbpw",
      "timestamp": "2025-04-13T15:57:05.000Z",
      "embeds": [
        {
          "url": "https://open.spotify.com/track/1Az0fhiWi0EVS4cZ3FF20X?si=IzpYnkWORqCKVdmm0bZbpw",
          "metadata": {
            "content_type": "text/html;charset=utf-8",
            "content_length": null,
            "_status": "RESOLVED",
            "html": {
              "ogUrl": "https://open.spotify.com/track/1Az0fhiWi0EVS4cZ3FF20X",
              "oembed": {
                "html": "<iframe style=\"border-radius: 12px\" width=\"100%\" height=\"152\" title=\"Spotify Embed: Sometimes It Snows in April\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\" src=\"https://open.spotify.com/embed/track/1Az0fhiWi0EVS4cZ3FF20X?si=IzpYnkWORqCKVdmm0bZbpw&utm_source=oembed\"></iframe>",
                "type": "rich",
                "title": "Sometimes It Snows in April",
                "width": 456,
                "height": 152,
                "method": "provider-api",
                "version": "1.0",
                "iframe_url": "https://open.spotify.com/embed/track/1Az0fhiWi0EVS4cZ3FF20X?si=IzpYnkWORqCKVdmm0bZbpw&utm_source=oembed",
                "provider_url": "https://spotify.com",
                "provider_name": "Spotify",
                "thumbnail_url": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0223cc0f0a925845a3de4aca38",
                "thumbnail_width": 300,
                "thumbnail_height": 300
              },
              "ogType": "music.song",
              "favicon": "https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png",
              "ogAudio": "https://p.scdn.co/mp3-preview/2f10633ae32f519d6e152f6c77d05fbf0d9c212e",
              "ogImage": [
                {
                  "url": "https://i.scdn.co/image/ab67616d0000b27323cc0f0a925845a3de4aca38"
                }
              ],
              "ogTitle": "Sometimes It Snows in April",
              "ogLocale": "en",
              "ogSiteName": "Spotify",
              "ogAudioType": "audio/mpeg",
              "ogDescription": "Prince · Parade - Music from the Motion Picture Under the Cherry Moon · Song · 1986"
            }
          }
        }
      ],
      "channel": {
        "object": "channel_dehydrated",
        "id": "nature",
        "name": "Nature",
        "image_url": "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/39244757-3641-41c7-ad20-ce8a5536b800/original"
      },
      "reactions": {
        "likes_count": 0,
        "recasts_count": 0,
        "likes": [],
        "recasts": []
      },
      "replies": {
        "count": 1
      },
      "mentioned_profiles": [],
      "mentioned_profiles_ranges": [],
      "mentioned_channels": [],
      "mentioned_channels_ranges": [],
      "author_channel_context": {
        "role": "member",
        "following": true
      }
    },
    {
      "object": "cast",
      "hash": "0x7c29318a7ac74ef8a24c9554f7765b4be426c70d",
      "author": {
        "object": "user",
        "fid": 15431,
        "username": "mikestjean",
        "display_name": "mikestjean",
        "pfp_url": "https://i.imgur.com/o9DOv0w.jpg",
        "custody_address": "0xeb759daef284b77f4155e84267877f3cd8af897c",
        "profile": {
          "bio": {
            "text": "music • multimedia • web3"
          }
        },
        "follower_count": 549,
        "following_count": 234,
        "verifications": [
          "0xd3432463cf264f4def759ca6f8843d47dd00b2fd",
          "0xd1a583a00cd0b4e0b64d4fba3e77379c43a60af1"
        ],
        "verified_addresses": {
          "eth_addresses": [
            "0xd3432463cf264f4def759ca6f8843d47dd00b2fd",
            "0xd1a583a00cd0b4e0b64d4fba3e77379c43a60af1"
          ],
          "sol_addresses": [],
          "primary": {
            "eth_address": "0xd1a583a00cd0b4e0b64d4fba3e77379c43a60af1",
            "sol_address": null
          }
        },
        "verified_accounts": [],
        "power_badge": false
      },
      "app": {
        "object": "user_dehydrated",
        "fid": 15431,
        "username": "mikestjean",
        "display_name": "mikestjean",
        "pfp_url": "https://i.imgur.com/o9DOv0w.jpg"
      },
      "thread_hash": "0x7c29318a7ac74ef8a24c9554f7765b4be426c70d",
      "parent_hash": null,
      "parent_url": "https://warpcast.com/~/channel/sonata",
      "root_parent_url": "https://warpcast.com/~/channel/sonata",
      "parent_author": {
        "fid": null
      },
      "text": "Chillin’ to Wall of Dreams vibes 🎶\nhttps://open.spotify.com/track/3SXf4NS2yvfVLkVF2bvTWC",
      "timestamp": "2025-04-13T15:30:10.000Z",
      "embeds": [
        {
          "url": "https://open.spotify.com/track/3SXf4NS2yvfVLkVF2bvTWC",
          "metadata": {
            "content_type": "text/html;charset=utf-8",
            "content_length": null,
            "_status": "RESOLVED",
            "html": {
              "ogUrl": "https://open.spotify.com/track/3SXf4NS2yvfVLkVF2bvTWC",
              "oembed": {
                "html": "<iframe style=\"border-radius: 12px\" width=\"100%\" height=\"152\" title=\"Spotify Embed: Wall Of Dreams (The Kalimba)\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\" src=\"https://open.spotify.com/embed/track/3SXf4NS2yvfVLkVF2bvTWC?utm_source=oembed\"></iframe>",
                "type": "rich",
                "title": "Wall Of Dreams (The Kalimba)",
                "width": 456,
                "height": 152,
                "method": "provider-api",
                "version": "1.0",
                "iframe_url": "https://open.spotify.com/embed/track/3SXf4NS2yvfVLkVF2bvTWC?utm_source=oembed",
                "provider_url": "https://spotify.com",
                "provider_name": "Spotify",
                "thumbnail_url": "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02be3cc071c5c13fe200fa2760",
                "thumbnail_width": 300,
                "thumbnail_height": 300
              },
              "ogType": "music.song",
              "favicon": "https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png",
              "ogAudio": "https://p.scdn.co/mp3-preview/e844c61d97dbeab2fb96e2ae1d7e2e58b1f47466",
              "ogImage": [
                {
                  "url": "https://i.scdn.co/image/ab67616d0000b273be3cc071c5c13fe200fa2760"
                }
              ],
              "ogTitle": "Wall Of Dreams (The Kalimba)",
              "ogLocale": "en",
              "ogSiteName": "Spotify",
              "ogAudioType": "audio/mpeg",
              "ogDescription": "Bennett Kuhn · con•tact · Song · 2020"
            }
          }
        }
      ],
      "channel": {
        "object": "channel_dehydrated",
        "id": "sonata",
        "name": "sonata",
        "image_url": "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4e85acaa-4f1d-444b-1e35-dd06d43d0800/rectcrop3"
      },
      "reactions": {
        "likes_count": 0,
        "recasts_count": 0,
        "likes": [],
        "recasts": []
      },
      "replies": {
        "count": 1
      },
      "mentioned_profiles": [],
      "mentioned_profiles_ranges": [],
      "mentioned_channels": [],
      "mentioned_channels_ranges": [],
      "author_channel_context": {
        "role": "member",
        "following": true
      }
    },

    Using this API request and response, I would like to build a feed of spotify embeds made from the embed urls that have open.spotify.com. Each card should also include who casted it, their pfp, and the text of the cast.
