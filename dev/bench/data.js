window.BENCHMARK_DATA = {
  "lastUpdate": 1673948401741,
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
    ]
  }
}