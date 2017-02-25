package com.example.Dao;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.example.bean.UpdateStatus;
@Configuration
@Component
public class UpdateStatusDAO {
	
	@Autowired
	JdbcTemplate template; 
	 Calendar calendar = Calendar.getInstance();
	    java.sql.Date ourJavaDateObject = new java.sql.Date(calendar.getTime().getTime());
	public List<UpdateStatus> getStatus(int id)
	{
		
		
		String sql = "select a.task_name,b.due_date,b.login_id,b.status  from task_status b ,task_master a where b.login_id=? and b.task_id=a.task_id and b.due_date <=?";
		
		return template.query(sql, new Object[]{id,ourJavaDateObject}, new RowMapper<UpdateStatus>(){
			@Override
			
			public UpdateStatus mapRow(ResultSet rs, int rownumber) throws SQLException
			{
				UpdateStatus up = new UpdateStatus();
				up.setStatus(rs.getString(4));
				up.setLogin_id(rs.getInt(3));
				up.setDue_date(rs.getDate(2));
				up.setTaskName(rs.getString(1));
			
				return up;
			}
		});
		//return template.queryForObject(sql, new Object[]{id},new BeanPropertyRowMapper<UpdateStatus>(UpdateStatus.class));
	}
	
	public int update(UpdateStatus upd)
	{
		  // java.sql.Date ourJavaDateObject = new java.sql.Date(upd.getDue_date());
		String sql = "update task_status set status='"+upd.getStatus()+"' where login_id="+upd.getLogin_id()+""
				+ " and due_date='"+upd.getDue_date()+"' "
				+ "and task_id=(select task_id from task_master where task_name='"+upd.getTaskName()+"' limit 1 )";
		return template.update(sql);
	}

}
