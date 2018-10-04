class CreateBasicInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :basic_infos do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :tel
      t.string :linkedin
      t.string :github
      t.string :website

      t.timestamps
    end
  end
end
