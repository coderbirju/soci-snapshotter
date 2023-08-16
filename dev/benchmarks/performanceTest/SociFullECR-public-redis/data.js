window.BENCHMARK_DATA = {
  "lastUpdate": 1692217058946,
  "repoUrl": "https://github.com/coderbirju/soci-snapshotter",
  "entries": {
    "Soci Benchmark": [
      {
        "commit": {
          "author": {
            "email": "yogidas.a@northeastern.edu",
            "name": "Arjun",
            "username": "coderbirju"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80178b5622316be5cdb3aa95d11f1a1d538b74dc",
          "message": "Merge pull request #64 from coderbirju/fix_visualization\n\nAdd timeout of 10 secs",
          "timestamp": "2023-08-15T15:14:16-07:00",
          "tree_id": "314cb2f8bca8ab4023b59b5797e499af9c279361",
          "url": "https://github.com/coderbirju/soci-snapshotter/commit/80178b5622316be5cdb3aa95d11f1a1d538b74dc"
        },
        "date": 1692138458705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-redis-lazyTaskDuration",
            "value": 10.031,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-localTaskDuration",
            "value": 10.032,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-pullTaskDuration",
            "value": 3.675,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yogidas.a@northeastern.edu",
            "name": "Arjun",
            "username": "coderbirju"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a09d35171fd63235633428fbab7bec040b2f868",
          "message": "Merge pull request #65 from coderbirju/fix_visualization\n\nRemove Timeout 10 sec",
          "timestamp": "2023-08-15T15:34:21-07:00",
          "tree_id": "8d8c2b44eeec62852e5eda5c508079a290c539db",
          "url": "https://github.com/coderbirju/soci-snapshotter/commit/6a09d35171fd63235633428fbab7bec040b2f868"
        },
        "date": 1692139295330,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-redis-lazyTaskDuration",
            "value": 0.019999999999999997,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-localTaskDuration",
            "value": 0.0205,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-pullTaskDuration",
            "value": 2.968,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun Yogidas"
          },
          "committer": {
            "email": "arjunry@amazon.com",
            "name": "Arjun Yogidas"
          },
          "distinct": true,
          "id": "f865a178b7a9879286e67934c378adea59ecc0a1",
          "message": "Add timeout of 10 secs\n\nThis commit adds 10 secs to the RunContainerTaskForReadyLine\nfunction\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2023-08-16T20:03:29Z",
          "tree_id": "414cb0a6d7d69d63dfde13c41440d07b2e884463",
          "url": "https://github.com/coderbirju/soci-snapshotter/commit/f865a178b7a9879286e67934c378adea59ecc0a1"
        },
        "date": 1692217056627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-redis-lazyTaskDuration",
            "value": 10.03,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-localTaskDuration",
            "value": 10.0305,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-redis-pullTaskDuration",
            "value": 3.3125,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      }
    ]
  }
}