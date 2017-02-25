package com.example.Dao;



import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;

import com.example.bean.AddStatus;

@Component
public class AddStatusDao {
@Autowired
	JdbcTemplate jdbcTemplate;


@Autowired
private DataSource dataSource;

private SimpleJdbcCall jdbcCall;
@Autowired
public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
    this.jdbcCall =  new SimpleJdbcCall(dataSource).
                     withProcedureName("retrive_id");
 }

  public int getId(String taskname)
  { 
  int taskid=0;
	  SqlParameterSource in = new MapSqlParameterSource().addValue("taskname", taskname);
	  
	  Map<String, Object> out = jdbcCall.execute(in);
	  
	   taskid = Integer.parseInt( (String) out.get("id"));
	  return taskid;
	  

  }


	public void insertBatch(final List<AddStatus> ls) {

		  String sql = "insert into task_status " +
			"(TASK_ID,DUE_DATE, LOGIN_ID, STATUS) VALUES (?, ?, ?,?)";

		  jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
			  
			  @Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				AddStatus ls1 = ls.get(i);
				ps.setInt(1,ls1.getTask_id() );
				ps.setDate(2, ls1.getEndDate());
				ps.setInt(3,ls1.getLogin_id() );
				ps.setString(4, ls1.getStatus());
			}

			@Override
			public int getBatchSize() {
				return ls.size();
			}
		  });
		}
	
	
}
