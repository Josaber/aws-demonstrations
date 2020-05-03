# AWS Athena Example

* **Date**: 2018-06-16
* **Author**: https://github.com/Josaber

## Project Overview

* Change [SQL](main.rb) based on your requirement
* Implement `StatisticsUtil.calculate` method based on your situation
* Get result: `result/result.csv`

## Local Run

* command: `auto/run-local [env] [start-date] [end-date]`
* env: `test, ..., (*)prod`
* start-date (include)
* end-date (exclude)
* result: `result/result.csv`

## Docker Run

* command: `auto/run-docker [env] [start-date] [end-date]`
* env: `test, ..., (*)prod`
* start-date (include)
* end-date (exclude)
* result: `result/result.csv`

## Note

* **The end-date is excluded**:
Use 2017-11-20 if you hope the end-date is 2017-11-19
* Date format: _e.g._
    ```
    2017-10-20 (suggested)
    2017/10/20
    Oct 20th 2017        Oct, 20th, 2017
    October 20th 2017    October, 20th, 2017
    2017 Oct 20th        2017, Oct, 20th        2017-Oct-20th
    2017 October 20th    2017, October, 20th    2017-October-20th
    ```
