FROM ruby:2.5

RUN apt-get update && gem install bundler
COPY Gemfile /app/
COPY Gemfile.lock /app/
WORKDIR /app
RUN bundle install

COPY . /app

ENV AWS_REGION ap-southeast-2

CMD ["ruby", "main.rb"]
