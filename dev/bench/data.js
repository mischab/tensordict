window.BENCHMARK_DATA = {
  "lastUpdate": 1673876375864,
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
      }
    ]
  }
}