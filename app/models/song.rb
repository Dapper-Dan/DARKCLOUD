class Song < ApplicationRecord
    validates :title, :display_name, presence: true

   

    has_one_attached :music


    belongs_to :user,
    primary_key: :display_name,
    foreign_key: :display_name,
    class_name: :User
    
end