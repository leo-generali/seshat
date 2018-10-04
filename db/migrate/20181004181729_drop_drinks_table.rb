class DropDrinksTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :drinks
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
