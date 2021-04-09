require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# Hack for allowing SVG files. While this hack is here, we should **not**
# allow arbitrary SVG uploads. https://github.com/rails/rails/issues/34665
ActiveStorage::Engine.config
  .active_storage
  .content_types_to_serve_as_binary
  .delete('image/svg+xml')

module TakeHomeProject2021
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Don't generate system test files.
    config.generators.system_tests = nil

    config.generators do |g|
      g.test_framework  false
      g.stylesheets     false
      g.javascripts     false
      g.helper          false
      g.channel         assets: false
    end

    config.autoload_paths += [
      "#{config.root}/app/validators",
      "#{config.root}/app/serializers",
      "#{config.root}/app/notifiers",
      "#{config.root}/app/lib",
      "#{config.root}/app/lib/errors"
    ]

    config.sass.preferred_syntax = :scss
  end
end
