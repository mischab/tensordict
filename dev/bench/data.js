window.BENCHMARK_DATA = {
  "lastUpdate": 1674133549642,
  "repoUrl": "https://github.com/mischab/tensordict",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "4ca827554c64e04e54c2d153101aa2325a2111ff",
          "message": "Merge commit '61a4f973848020869727faaf7f1dcd3c1621774b'",
          "timestamp": "2023-01-16T14:37:34+01:00",
          "tree_id": "8f2ff93e1720cc20353bb76a51ebc1f2639691d9",
          "url": "https://github.com/mischab/tensordict/commit/4ca827554c64e04e54c2d153101aa2325a2111ff"
        },
        "date": 1673876375234,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1166.3791648943563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 857.35413499998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10685.17110351322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.58764500001371 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2467.8826360406847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 405.20565500000316 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2190.0206069550395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 456.61670800001275 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28454.6317388179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.143663400000946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17522.247893015923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.07030320000115 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31214.48805729778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.03640560000167 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 90777.61686135082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.015931399998635 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31228.31271752629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.02222319999919 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5855.810220629976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.77056159999984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26134.605065515865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.263444100002175 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7798.187784911214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.2349217000018 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23794.31538957681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.02684480000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 7803.167874535154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.1530803999999 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@users.noreply.github.com",
            "name": "Mischa Böhm",
            "username": "mischab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb86521b71fb0170b371b30da2f297e5951cc50e",
          "message": "Update trigger.txt",
          "timestamp": "2023-01-16T14:51:50+01:00",
          "tree_id": "5e242105c5c15e316eae267fce900c7bd9942af2",
          "url": "https://github.com/mischab/tensordict/commit/bb86521b71fb0170b371b30da2f297e5951cc50e"
        },
        "date": 1673877218374,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1283.1982787034467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 779.3027910000063 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11019.593752318115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.74744699999826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2622.5010633192533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 381.3153840000041 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2329.1389980869944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.3432039999914 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29298.770636182548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.13112490000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17820.15315156388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.11624050000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31640.925012824264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.604638599999646 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 90587.46997920408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.039054299999407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31403.934826358458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.843143400000432 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5914.798943063096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.0674542999986 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26075.562929225518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.350082900001325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7727.389225041488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.40981369999918 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23612.279253198813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.35084590000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 7869.406977165947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.07437840000182 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "e022fa0f4a8c0abec84683719f3a9cbf44a97e33",
          "message": "Merge commit '58b9272ed1aece68f708134931653cd450b5b2a7'",
          "timestamp": "2023-01-17T11:24:10+01:00",
          "tree_id": "e7d00e9d6f2a32cff0624ecf6c058cdbebd59bdc",
          "url": "https://github.com/mischab/tensordict/commit/e022fa0f4a8c0abec84683719f3a9cbf44a97e33"
        },
        "date": 1673951163292,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1294.5642345581432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 772.4607039999967 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10997.089862103385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.93314800000485 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2661.3763614443633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.7454280000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2354.1550286560464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.7808610000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29422.78700111844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.98726300000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17722.96912554392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.423954299999934 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31663.860209021877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.581746300000194 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 90150.43159112912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.09257030000066 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30902.617400704803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.3597184999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5954.33350238504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.9449092999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26230.612944136643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.1233942999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7680.921848263929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.1927059999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23803.133858239697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.01127489999976 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 8005.580901794035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.9128591999991 usec\nrounds: 1"
          }
        ]
      }
    ],
    "Push benchmark results to GitHub Pages": [
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "eeb3b8e4b7068bf0f4765315ae384bb3f39fb1b5",
          "message": "Merge branch 'main' of https://github.com/mischab/tensordict",
          "timestamp": "2023-01-17T10:38:07+01:00",
          "tree_id": "92aa402caf42fdc3d0fcff81547464fa371f08ef",
          "url": "https://github.com/mischab/tensordict/commit/eeb3b8e4b7068bf0f4765315ae384bb3f39fb1b5"
        },
        "date": 1673948400236,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1277.6804486240678,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 782.6683119999984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10905.011720926765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.70095599998263 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2631.7064743238334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 379.9815859999853 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2284.200542099184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.78993200001537 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29553.75336701763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.836649700000976 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17437.0692248335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.349087000000054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 32101.78381619279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.15091690000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 88539.61074921976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.294379900002127 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30707.039000036297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.56582310000056 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5868.620228304929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.39780409999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26178.062416154837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.19992420000062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7760.355311034074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.8600792000011 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24134.393256997293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.434644299999945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 7903.167464886929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.53154630000074 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "b3ffdb7f8dad218cc280b56533c7cc6799f27400",
          "message": "Merge commit '82218815f5053f58e2205b1e338afd3bc749a02f'",
          "timestamp": "2023-01-19T09:10:06+01:00",
          "tree_id": "7206d8d4811eb27d8ace15dffc6fff933c9ea6b8",
          "url": "https://github.com/mischab/tensordict/commit/b3ffdb7f8dad218cc280b56533c7cc6799f27400"
        },
        "date": 1674115967724,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 735.870224981277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.358935266100002 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 117771.9539023245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.49098589999926 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 66883.34596725793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.951405100001125 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 26770.97953857575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.353881600000705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 36757.88310571909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.205048700000134 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 27521.64445920837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.33503810000036 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 23168.141610799114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.16271959999938 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 24182.6173759927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.35201679999909 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 4507.951318603037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.83025710000095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 18271.5444211115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.72991100000115 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 11507.766655583839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.89783430000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 18130.132963584707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.156793500000845 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 10775.743048096723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.80102499999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 12120.624453807779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.5040000052013 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1042.9705210535674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 958.7998700000071 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 9876.540381040371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.25002899999913 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2237.455988054868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 446.93616559999896 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 1936.5553344251775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.3808037000024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 25669.117001216706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.95731979999937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 15565.336775136282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.24531730000069 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 27737.936546717894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.05170840000085 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 78505.36031067057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.737983700000655 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 27492.538793024436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.37350509999919 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5218.031947993438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.64313479999748 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 22584.5858801119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.27798700000096 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 6728.173213008536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.6287537999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 21027.103391669905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.557667899999956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 6783.639182117485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.41350080000188 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "55d213cc8260afd863e60e5fe85df5bbbeef38a9",
          "message": "Merge commit '07609fa21e6cc23e26297b92f30b0c65bc793b00'",
          "timestamp": "2023-01-19T09:42:31+01:00",
          "tree_id": "ba7a96d688e6622cdae687be3b772c19e356b03d",
          "url": "https://github.com/mischab/tensordict/commit/55d213cc8260afd863e60e5fe85df5bbbeef38a9"
        },
        "date": 1674117922116,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 552.3517662072628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8104404858999998 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 103221.5390733984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.687900500000524 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 56818.26349443829,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.599974699999166 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 22432.79402421336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.577594700001555 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 31829.16578840599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.417725700001142 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 22079.33979806635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.29120929999806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 17506.00552272513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.12325399999827 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 18838.47331218813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.08285780000119 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 2924.827519192043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 341.9005029999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 13586.932116950344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.60013220000212 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 8810.341048997985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.5029841000005 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 13501.406455687107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.06635769999923 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 8567.353822903046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.72215490000042 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 11185.181868319038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.40400002188653 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 826.4996633071836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2099218479999934 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 8442.427435965168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.44934499998772 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1775.9120039949473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 563.0909626999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 1498.0773874054355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 667.5222577999989 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 23743.090867401275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.11751560000039 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 12349.647335196165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.97397220000175 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 24257.77585673387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.22389480000095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 69310.15793872175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.427899599999705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 23841.205536087647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.944187700002544 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 4045.8100501584127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.1692905999987 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 18914.515905889348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.86944720000122 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 5000.178173848983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.99287329999902 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 16717.74098141301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.8166942000006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 5031.489448409897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.7483050999998 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "b7381d46328e588e0be32ee6a3d7c868cf6499fd",
          "message": "Merge commit 'f15e8f09a3a2b8e85cb96f492ebe41bacac49c36'",
          "timestamp": "2023-01-19T10:06:51+01:00",
          "tree_id": "a838d1e45c3382b6c0d279a7802ae9b5b80cc7d6",
          "url": "https://github.com/mischab/tensordict/commit/b7381d46328e588e0be32ee6a3d7c868cf6499fd"
        },
        "date": 1674119348222,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 895.6581486600751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1164974064000006 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 127300.4755360405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.855430199998636 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 74979.64208993509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.336953499998572 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 30469.876514182488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.819299400000546 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 40452.81358501449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.72015939999892 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 31548.766025543366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.69696079999937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 27459.525688865448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.417235000001824 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 28180.972263326734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.48493609999923 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 5771.871994505053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.25401550000095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 21905.66904563744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.65028340000197 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 13526.40933626929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.92944980000209 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 21869.249234884483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.726306800000316 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 12455.033949016046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.28882170000031 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 15923.566873061742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.80000002334418 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1298.042938066202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 770.390539999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 10986.314633505031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.02233400000159 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2653.7706406392617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 376.82231640000055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2289.9205153521366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.6963802000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29115.672022902418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.34576399999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17371.918434910516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.56416619999811 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31749.903520774515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.49615869999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 89200.88026639812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.210651700000085 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31020.047034207517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.23721740000087 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5945.146777463621,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.2044258000019 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26120.055674584044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.28475760000174 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7620.148636180862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.2310359999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24016.574587439023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.637911200001554 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 7963.431945986904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.57399960000167 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "committer": {
            "email": "mischab@fb.com",
            "name": "Mischa Boehm"
          },
          "distinct": true,
          "id": "540f8539e225d6fa892b6556aa3ca52a5ae05c3b",
          "message": "Merge commit 'c682950bc14da2c162e667625a0cde47d7050a35'",
          "timestamp": "2023-01-19T10:19:11+01:00",
          "tree_id": "e8a8b4a6e7ca2cf2c50f1cb0153406500636d96f",
          "url": "https://github.com/mischab/tensordict/commit/540f8539e225d6fa892b6556aa3ca52a5ae05c3b"
        },
        "date": 1674120097000,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 901.9809714331204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1086708385999997 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 127508.98310348255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.842584700000543 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 75563.89005114844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.233834299995806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 30996.35556319942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.261857299999974 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 40526.12309842279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.675442000000203 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 31348.513585620767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.89943909999897 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 27602.065253869237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.229173100002754 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 28424.99517841012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.18030500000009 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 5794.297986522753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.58346090000032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 21711.347084698536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.05886479999981 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 13404.696002808712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.60072199999672 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 21725.36557375798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.02914490000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 12561.311305132784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.60952290000023 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 14880.952370690437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.2000000463413 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1285.2526123267319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 778.0571619999819 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 11007.065842829832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.85073299996793 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2631.181795403392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 380.0573573999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2292.852445832631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.1379650999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29197.46322629515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.24955079999563 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17418.024930928616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.41179059999695 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31905.777695085944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.34228569999777 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 90307.14616341714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.07332079999992 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31097.791567629796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.15662430000066 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 5963.247288075898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.69386739999845 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26002.221296958513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.45825280000099 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 7633.449038126205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.0023810999951 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23105.123253089594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.28044430000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 7934.5942005488105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.03038980000177 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@users.noreply.github.com",
            "name": "Mischa Böhm",
            "username": "mischab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d2b364fb4201e75b9d45a46c55878d28a57879f",
          "message": "Update benchmarks.yml",
          "timestamp": "2023-01-19T13:31:22+01:00",
          "tree_id": "ef93f46d89a572f6200a4a2f35886288916f147b",
          "url": "https://github.com/mischab/tensordict/commit/8d2b364fb4201e75b9d45a46c55878d28a57879f"
        },
        "date": 1674131608213,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 1131.1387001463083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 884.0648807000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 168398.63540518464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.938290400001733 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 91005.64210408667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.988329700001032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 38826.7919494363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.75541140000155 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 49929.252745327154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.02833899999814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 38974.25619425132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.65796239999827 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 33605.29967942884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.757211199998324 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 34388.71367094138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.07930810000039 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 7143.214579110016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.99299460000145 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 32881.265582289365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.412454699998648 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 21350.31802942722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.83770979999906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 27233.670673363744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.71925139999814 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 15467.863186316445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.65017100000239 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 14326.85282274009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.79899998782457 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1302.5141246162034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 767.7459930000055 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13632.435512035572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.35446400000478 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2642.6768919256356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 378.4041866999985 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2601.2239169522645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 384.43441699999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29337.956533699515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.085536899999624 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20992.922977068232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.63510070000052 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31829.974259384355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.416927700001906 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 112278.34052120557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.906437299998515 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31318.77230487762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.929731799999672 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7559.388373091892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.28583460000038 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26159.801811038717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.226589300001024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 9234.616386162605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.2882015000024 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24142.714830175675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.4203624999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 9685.58652884309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.2461995999995 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@users.noreply.github.com",
            "name": "Mischa Böhm",
            "username": "mischab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d73f8d2a67c16450635d4b47e1ff5e83a99f5a7",
          "message": "Create benchmark_test.yml",
          "timestamp": "2023-01-19T14:03:37+01:00",
          "tree_id": "874da2e4f094580ca1db6c8d2f816a1558ad3f78",
          "url": "https://github.com/mischab/tensordict/commit/7d73f8d2a67c16450635d4b47e1ff5e83a99f5a7"
        },
        "date": 1674133548536,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common_ops_test.py::test_common_ops",
            "value": 1122.6854284271972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 890.7214565000004 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation",
            "value": 172814.8158426961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.786540900001569 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_empty",
            "value": 91056.24690971973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.982222900000238 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_1",
            "value": 39606.563449191046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.248340499999244 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_creation_nested_2",
            "value": 49713.08466036376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.11542850000012 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_clone",
            "value": 38517.55276078654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.962189399999147 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_setitem",
            "value": 33181.99820320794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.136822800000118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set",
            "value": 34176.39178109464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.2599641999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_shared",
            "value": 7145.047421418948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.95708369999988 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update",
            "value": 32506.768453680077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.762824100000334 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_update_nested",
            "value": 21360.726921942532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.81488619999925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested",
            "value": 27543.197718432715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.306604999998626 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common_ops_test.py::test_set_nested_new",
            "value": 15207.443104187838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.7572737999999 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed_benchmark_test.py::test_distributed",
            "value": 15527.950307274934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.40000001362023 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1291.1787937910563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 774.4860779999954 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13514.164384892405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.9964359999874 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2649.1867601985427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 377.4743309999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/functional_benchmarks_test.py::test_exec_td",
            "value": 2567.0137248515466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.5577145999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29293.317950163535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.137478099998475 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20962.98164470623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.7031377000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31907.609347417583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.340486499999543 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_view_td",
            "value": 112594.05488074462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.881463600002348 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31034.086260714103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.222633899999664 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7357.702253627606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.91199610000047 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26225.1220493579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.131376399999795 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_split_td",
            "value": 9336.639512077596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.10491700000091 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_pytree",
            "value": 24070.170516457747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.54519800000003 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/pytree_benchmarks_test.py::test_add_td",
            "value": 9546.319517939546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.75241249999954 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}