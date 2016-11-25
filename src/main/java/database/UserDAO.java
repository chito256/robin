package database;

@Repository
@Transactional

Public class UserDAO{

	@Autowired
	private SessionFactory _sessionFactory;

	private Session getSession(){
		return _sessionFactory.getCurrentSession();
	}

	public void save(Users user){
		getSession().save(user);
	}

	public void delete(Users user){
		getSession().delete(user);
	}

	@SuppressWarning("unchecked")
	public List getAll(){
		return getSession().createQuery("from users").list();
	}

	public void update(Users user){
		getSession().update(user);
	}

}