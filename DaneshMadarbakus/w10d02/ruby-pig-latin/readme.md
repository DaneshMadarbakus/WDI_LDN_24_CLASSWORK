---
title: Ruby Pig-latin
type: lesson
duration: '1:30'
creator:
    name: Alex Chin
    city: London
competencies: Programming
---

# Ruby Pig-latin

### Objectives
*After this lesson, students will be able to:*


- Understand how to run tests in Ruby

### Preparation
*Before this lesson, students should already be able to:*

- Understand what testing means

## Introduction

#### What is Pig Latin?

Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below), but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

- **Rule 1**: If a word begins with a vowel, add an "ay" sound to
  the end of the word.
- **Rule 2**: If a word begins with a consonant, move it to the
  end of the word, and then add "ay" to the end of the word.

There are a few more rules for edge cases, and there are regional
variants too.

See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

## Getting started running our tests

So that you don't have to remember all of the rules of Pig Latin, we have already some tests for you to try to pass.

We're going to use a Ruby test framework called [MiniTest](https://github.com/seattlerb/minitest).

> **Note:** Try to treat this like a game!

*Send over the starter code*

To run the test, we need to first run the test file:

```sh
$ ruby pig_latin_test.rb
```

You should get an error:

```sh
$ pig_latin_test.rb:2:in `require_relative': cannot load such file -- /Users/alexpchin/work_ga/curriculum-archived/baseline-excluded/06-server-applications/ruby-pig-latin/starter-code copy/pig_latin (LoadError)
	from pig_latin_test.rb:2:in `<main>'
```

If we **read the error carefully** then we can deduce that we are missing a file called `pig_latin.rb`.

Let's create that:

```bash
$ touch pig_latin.rb
```

If we run the test file again - we should now see:

```
MiniTest::Unit::TestCase is now Minitest::Test. From pig_latin_test.rb:4:in `<main>'
Run options: --seed 44187

# Running:

SSSESSSSSSS

Finished in 0.001233s, 8922.3576 runs/s, 0.0000 assertions/s.

  1) Error:
PigLatinTest#test_word_beginning_with_a:
NameError: uninitialized constant PigLatinTest::PigLatin
    pig_latin_test.rb:7:in `test_word_beginning_with_a'

11 runs, 0 assertions, 0 failures, 1 errors, 10 skips

You have skipped tests. Run with --verbose for details.
```

Great! This means that all of our tests have been skipped (`S`) except one, that has an error (`E`).

Your task is to try to get all of the tests to pass.

### Skip

You should try to solve only test at a time. The keyword `skip` will prevent the test from running:

```ruby
def test_other_word_beginning_e
  skip
  assert_equal "earay", PigLatin.translate("ear")
end
```
