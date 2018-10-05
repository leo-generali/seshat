class AddBasicInfoIdToResumes < ActiveRecord::Migration[5.2]
  def change
    add_column :resumes, :basic_info_id, :integer
  end
end
